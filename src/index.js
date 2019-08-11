import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card'
import './index.css';
import Header from "./components/Header";
import SearchBar from './components/SearchBar'

class App extends React.Component {
    render(){
        return(
            <div>
                <Header appName={'Food.io'}/>
                <SearchBar/>
                <Card image={'/images/steak.jpeg'}/>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));