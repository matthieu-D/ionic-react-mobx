import React, {Component} from 'react';
import axios from 'axios';

export default class AvengersComponent extends Component{
  constructor() {
    super();
    this.apiKey = '?apikey=62fd825f7cda72881097e65913c376c5';
    this.size = '/standard_fantastic';
    this.state = {
      series: []
    }
  }
   
  componentDidMount() {
    this.getData();
  }

  async getSerieThumbnail(serie) {
    const response = await axios.get(serie.resourceURI + this.apiKey)

    const serieInformation = response.data.data.results[0];

    const thumbnail = serieInformation.thumbnail;
    const title = serieInformation.title;
    const img = thumbnail.path + this.size + '.' + thumbnail.extension;

    this.setState({series: [...this.state.series, { img:img, title: title}]});
  } 

  async getData() {
    const response = await axios.get('http://gateway.marvel.com/v1/public/characters/1009165' + this.apiKey);

    const series = response.data.data.results[0].series.items;

    series.forEach((serie) => {
      this.getSerieThumbnail(serie);
    });
  }

  render(){
    return(
        <div>
          {this.state.series.map((serie, i) => {
            return <ion-card key={i}>
                  <ion-card-header>
                      <ion-card-title>{serie.title}</ion-card-title>
                  </ion-card-header>
  
                  <ion-card-content>
                      <ion-img src={serie.img}/>
                  </ion-card-content>
              </ion-card>
            })}
        </div>
    );
  }
}
