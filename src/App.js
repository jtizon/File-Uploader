import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className = "App">
        <SearchBar/>
        <FilterableList files = {this.props.files}/>
      </div>
    );
  }
}

export default App;
