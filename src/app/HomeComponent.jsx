import React, {Component} from 'react';

import {autorun, observable} from 'mobx';

export default class HomeComponent extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };

    this.store = observable({
      count: 0
    });

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  componentDidMount() {
    autorun(() => {
      this.setState({count: this.store.count})
    });
  }

  decrease () {
    this.store.count--;
  }

  increase () {
    this.store.count++;
  }
  
  render() {
    return(
      <div>
        <ion-button onClick={this.increase}>
          Increase
        </ion-button>
        
        <ion-button onClick={this.decrease}>
          Decrease
        </ion-button>

        {this.state.count}
      </div>
    );
  }
}