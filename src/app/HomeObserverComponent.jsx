import React, {Component} from 'react';

import { observable, action } from 'mobx';
import { observer } from "mobx-react";

@observer class HomeObserverComponent extends Component{
  @observable count = 0;

  constructor() {
    super();
    
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  @action.bound
  decrease () {
    this.count--;
  }

  @action.bound
  increase () {
    this.count++;
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
        
        {this.count}
      </div>
    );
  }
}

export default HomeObserverComponent;