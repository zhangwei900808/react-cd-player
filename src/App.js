import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import CdPlayer from './containers/ReactCdPlayer'

class App extends Component {
  onPlay=()=>{
    console.log('App onplay')
  }
  onPause=()=>{
    console.log('App onPause')
  }
  render() {
    const musicList =[{
      "id": 1,
      "title": "追光者",
      "artist": "岑宁儿",
      "cover": require('./assets/images/01.jpg'),
      "mp3": 'http://cdn.awbeci.com/music/react-cd-player/01.mp3'
    }, {
      "id": 2,
      "title": "被风吹过的夏天",
      "artist": "林俊杰-金纱",
      "cover": require('./assets/images/02.jpg'),
      "mp3": 'http://cdn.awbeci.com/music/react-cd-player/02.mp3'
    }, {
      "id": 3,
      "title": "小酒窝",
      "artist": "林俊杰-阿sa",
      "cover": require('./assets/images/03.jpg'),
      "mp3": 'http://cdn.awbeci.com/music/react-cd-player/03.mp3'
    }]
    return (
      <div className="App">
        <CdPlayer musicList={musicList} onPlay={this.onPlay} onPause={this.onPause}/>
      </div>
    );
  }
}

export default App;
