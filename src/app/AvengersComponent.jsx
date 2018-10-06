import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AvengersPresentationComponent from "./AvengersPresentationComponent.jsx";
import { connect } from 'react-redux';

import axios from 'axios';

class AvengersComponent extends Component{
  constructor(props, context) {
    super(props);
    
    this.state = {}
    this.store = context.store;
    this.apiKey = '?apikey=62fd825f7cda72881097e65913c376c5';
    this.size = '/standard_fantastic';
  }
   
  componentDidMount() {
    this.getData();
  }

  componentWillReceiveProps(newProps) {
    // this.setState()...
  }
  
  async getSerieThumbnail(serie) {
    const response = await axios.get(serie.resourceURI + this.apiKey)

    const serieInformation = response.data.data.results[0];

    const thumbnail = serieInformation.thumbnail;
    const title = serieInformation.title;
    const img = thumbnail.path + this.size + '.' + thumbnail.extension;

    this.store.dispatch({type:"ADD_AVENGERS_SERIE", payload:{ img:img, title: title}})
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
        <AvengersPresentationComponent avengersSerieList={this.props.avengersSerieList}/>
      </div>
    );
  }
}

AvengersComponent.contextTypes = {
  store: PropTypes.object
};

const mapStateToProps = state => {
  return {
    avengersSerieList: state.avengersSerieList
  }
}

export default connect(
  mapStateToProps
)(AvengersComponent) 
