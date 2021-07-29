import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterBloc from './locs/CounterBloc';

const bloc = new CounterBloc();

class App extends Component {
  componentWillUnmount(){
    bloc.dispose();
  }
  render() {
    return (
      <div>
        <Counter bloc={bloc} />
      </div>
    );
  }
}

export default App;