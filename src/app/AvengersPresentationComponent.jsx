import React, {Component} from 'react';

export default class AvengersPresentationComponent extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    const {avengersSerieList} = this.props; 

    return(
        <div> 
          {avengersSerieList.map((serie, i) => {
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
