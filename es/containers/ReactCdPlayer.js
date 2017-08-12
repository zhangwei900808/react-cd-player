var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import cdPlayer from '../assets/css/CdPlayer.css';

import React from 'react';
import PropTypes from 'prop-types';
import FastForward from 'material-ui-icons/FastForward';
import Grid from 'material-ui/Grid';
import FastRewind from 'material-ui-icons/FastRewind';
import { LinearProgress } from 'material-ui/Progress';
import cn from 'classnames';

import Cd from '../components/Cd';

var ReactCdPlayer = function (_React$Component) {
    _inherits(ReactCdPlayer, _React$Component);

    function ReactCdPlayer(props) {
        _classCallCheck(this, ReactCdPlayer);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.resizeListener = function () {
            var cdPlayerRef = _this.cdPlayerRef;

            _this.fastRewind.style.top = String(cdPlayerRef.offsetTop + 260 + 'px');
            _this.fastForward.style.top = String(cdPlayerRef.offsetTop + 260 + 'px');
            _this.bottomBarRef.style.top = String(cdPlayerRef.offsetTop + 320 + 'px');
        };

        _this.onTimeUpdate = function () {
            console.log('ontimeupdate');
            var ratio = _this.state.audio.currentTime / _this.state.audio.duration * 100;
            _this.setState({
                completed: ratio
            });
            if (parseInt(ratio) == 100) {
                _this.onFastForward();
            }
        };

        _this.loadMusic = function (i) {
            localStorage.currentMusic = i;
            _this.setState({
                currentMusic: parseInt(localStorage.currentMusic),
                currentMusicItem: _this.props.musicList[i],
                completed: 0
            }, function () {
                if (_this.state.isPlaying) {
                    _this.play();
                }
            });
        };

        _this.progress = function () {
            if (_this.state.completed > 100) {
                _this.setState({ completed: 100 });
            } else {
                var diff = Math.random() * 10;
                _this.setState({ completed: _this.state.completed + diff });
            }
        };

        _this.onProgress = function (e) {
            var distance = e.pageX - _this.state.progress.offsetLeft;
            _this.state.audio.currentTime = distance * (_this.state.audio.duration / _this.state.progress.offsetWidth);
        };

        _this.play = function () {
            _this.state.audio.play();
            _this.setState({
                isPlaying: true
            });
            //call back to parent
            if (typeof _this.props.onPlay !== 'undefined') {
                _this.props.onPlay();
            }
        };

        _this.pause = function () {
            _this.state.audio.pause();
            _this.setState({
                isPlaying: false
            });
            //call back to parent
            if (typeof _this.props.onPause !== 'undefined') {
                _this.props.onPause();
            }
        };

        _this.onPlay = function (isPlaying) {
            _this.play();
        };

        _this.onPause = function (isPlaying) {
            _this.pause();
        };

        _this.onFastRewind = function () {
            console.log('onFastRewind music');
            if (_this.state.prevMusic != -1) {
                _this.loadMusic(_this.state.prevMusic);
                // prevMusic = randomNum(0, this.state.playlist.length);
            } else if (_this.state.currentMusic == 0) {
                _this.loadMusic(_this.props.musicList.length - 1);
            } else {
                _this.loadMusic(parseInt(_this.state.currentMusic) - 1);
            }
        };

        _this.onFastForward = function () {
            console.log('onFastForward music');
            if (_this.state.repeat == 0) {
                _this.setState({
                    prevMusic: _this.state.currentMusic
                });
                _this.setState({
                    nextMusic: _this.randomNum(0, _this.props.musicList.length)
                });
                _this.loadMusic(_this.state.nextMusic);
            } else if (_this.state.currentMusic == _this.props.musicList.length - 1) {
                _this.loadMusic(0);
            } else {
                _this.loadMusic(parseInt(_this.state.currentMusic) + 1);
            }
        };

        _this.randomNum = function (min, max) {
            return Math.floor(parseInt(min) + Math.random() * parseInt(max - min));
        };

        _this.state = {
            audio: null,
            listStatus: 0,
            isPlaying: false,
            currentMusic: 0,
            currentMusicItem: null,
            prevMusic: -1,
            nextMusic: 0,
            repeat: 2,
            relist: ['fa-random', 'fa-refresh', 'fa-retweet'],
            retitle: ['Random', 'Cycle', 'Order'],
            completed: 0,
            progress: null,
            fastTop: 0
        };
        _this.onTimeUpdate = _this.onTimeUpdate.bind(_this);
        _this.onProgress = _this.onProgress.bind(_this);
        return _this;
    }

    ReactCdPlayer.prototype.componentDidMount = function componentDidMount() {
        if (localStorage.currentMusic) {
            this.setState({
                currentMusic: parseInt(localStorage.currentMusic)
            });
        }
        if (this.state.currentMusic >= this.props.musicList.length) {
            localStorage.currentMusic = 0;
            this.setState({
                currentMusic: parseInt(localStorage.currentMusic)
            });
            window.location.reload();
        }
        this.loadMusic(this.state.currentMusic);
        this.state.audio.addEventListener('timeupdate', this.onTimeUpdate);
        window.addEventListener('resize', this.resizeListener);
        this.resizeListener();
    };
    //上一曲

    //下一曲


    ReactCdPlayer.prototype.render = function render() {
        var _this2 = this;

        return React.createElement(
            'section',
            { className: 'cd-player-container' },
            React.createElement(
                Grid,
                { container: true, spacing: 0 },
                React.createElement(
                    Grid,
                    { item: true, xs: 12 },
                    React.createElement(
                        Grid,
                        {
                            container: true,
                            align: 'center',
                            direction: 'column',
                            justify: 'center' },
                        React.createElement(
                            'section',
                            { className: 'control-buttons' },
                            React.createElement(
                                'section',
                                { ref: function ref(_ref) {
                                        return _this2.fastRewind = _ref;
                                    }, className: 'fast-rewind-outer' },
                                React.createElement(FastRewind, { className: 'fast-rewind-icon', onClick: this.onFastRewind })
                            ),
                            React.createElement(
                                'section',
                                { className: 'cd-outer' },
                                React.createElement(Cd, _extends({ cdContainerRef: function cdContainerRef(ref) {
                                        return _this2.cdPlayerRef = ref;
                                    } }, this.state, { onPlay: this.onPlay, onPause: this.onPause }))
                            ),
                            React.createElement(
                                'section',
                                { ref: function ref(_ref2) {
                                        return _this2.fastForward = _ref2;
                                    }, className: 'fast-forward-outer fast' },
                                React.createElement(FastForward, { className: 'fast-forward-icon', onClick: this.onFastForward })
                            )
                        ),
                        React.createElement(
                            'section',
                            { ref: function ref(_ref5) {
                                    return _this2.bottomBarRef = _ref5;
                                }, className: 'bottom-bar' },
                            React.createElement(
                                'section',
                                { className: 'title' },
                                React.createElement(
                                    'h1',
                                    { className: 'name' },
                                    this.state.currentMusicItem ? this.state.currentMusicItem.title : ''
                                ),
                                React.createElement(
                                    'h2',
                                    { className: 'sub-title' },
                                    this.state.currentMusicItem ? this.state.currentMusicItem.artist : ''
                                )
                            ),
                            React.createElement('audio', { ref: function ref(_ref3) {
                                    return _this2.state.audio = _ref3;
                                }, id: 'music', src: this.state.currentMusicItem ? this.state.currentMusicItem.mp3 : '' }),
                            React.createElement(
                                'section',
                                { className: 'process-outer', ref: function ref(_ref4) {
                                        return _this2.state.progress = _ref4;
                                    } },
                                React.createElement(LinearProgress, { color: 'accent', mode: 'determinate', value: this.state.completed, onClick: this.onProgress })
                            )
                        )
                    )
                )
            )
        );
    };

    return ReactCdPlayer;
}(React.Component);

ReactCdPlayer.propTypes = {
    musicList: PropTypes.array.isRequired,
    onPlay: PropTypes.func
};

export default ReactCdPlayer;