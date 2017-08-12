function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import cd from '../assets/css/Cd.css';

import React from 'react';
import Grid from 'material-ui/Grid';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import cn from 'classnames';

var Cd = function (_React$Component) {
    _inherits(Cd, _React$Component);

    function Cd(props) {
        _classCallCheck(this, Cd);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.onPlay = function (e) {
            console.log('this is cd onPlay');
            e.preventDefault();

            console.log('isPlaying=' + _this.props.isPlaying);
            _this.props.onPlay(_this.props.isPlaying);
        };

        _this.onPause = function (e) {
            console.log('this is cd onPlay');
            e.preventDefault();
            _this.props.onPause(_this.props.isPlaying);
        };

        _this.state = {};
        return _this;
    }

    Cd.prototype.componentDidMount = function componentDidMount() {
        console.log('isPlaying=' + this.props.isPlaying);
    };

    Cd.prototype.render = function render() {
        var coverClass = cn({
            'cd-cover': true,
            'playing': this.props.isPlaying
        });
        return React.createElement(
            'div',
            { className: 'cd-container', ref: this.props.cdContainerRef },
            React.createElement(
                Grid,
                { container: true, spacing: 0 },
                React.createElement(
                    Grid,
                    { item: true, xs: true },
                    React.createElement(
                        'div',
                        { className: coverClass },
                        React.createElement('img', { className: 'cover', src: this.props.currentMusicItem ? this.props.currentMusicItem.cover : '', alt: '' }),
                        React.createElement(
                            'div',
                            { className: 'control-center' },
                            !this.props.isPlaying ? React.createElement(PlayArrow, { className: 'play-icon', onClick: this.onPlay }) : React.createElement(Pause, { className: 'pause-icon', onClick: this.onPause })
                        )
                    )
                )
            )
        );
    };

    return Cd;
}(React.Component);

export { Cd as default };