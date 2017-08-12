function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import CdPlayer from './containers/ReactCdPlayer';

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.onPlay = function () {
      console.log('App onplay');
    }, _this.onPause = function () {
      console.log('App onPause');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  App.prototype.render = function render() {
    var musicList = [{
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
    }];
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(CdPlayer, { musicList: musicList, onPlay: this.onPlay, onPause: this.onPause })
    );
  };

  return App;
}(Component);

export default App;