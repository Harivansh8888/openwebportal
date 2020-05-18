import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ButtonAppBar from './components/NavBar';


class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
      </div>
    )
  }
}

export default App;