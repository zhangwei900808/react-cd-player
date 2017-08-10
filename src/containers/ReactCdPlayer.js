import cdPlayer from '../assets/css/CdPlayer.css'

import React from 'react'
import PropTypes from 'prop-types'
import FastForward from 'material-ui-icons/FastForward';
import FastRewind from 'material-ui-icons/FastRewind';
import { LinearProgress } from 'material-ui/Progress';

import Cd from '../components/Cd'

class ReactCdPlayer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            audio:null,
            listStatus : 0,
            isPlaying :false,
            currentMusic : 0,
            currentMusicItem:null,
            prevMusic : -1,
            nextMusic:0,
            repeat : 2,
            relist :['fa-random', 'fa-refresh', 'fa-retweet'],
            retitle : ['Random', 'Cycle', 'Order'],
            completed: 0,
            progress:null
        }
    }
    componentDidMount() {
        if (localStorage.currentMusic)
            {
                this.setState({
                    currentMusic: parseInt(localStorage.currentMusic)
                })
            }
        if (this.state.currentMusic >= this.props.musicList.length) {
            localStorage.currentMusic = 0;
            this.setState({
                    currentMusic: parseInt(localStorage.currentMusic)
                })
            window.location.reload();
        }
        this.loadMusic(this.state.currentMusic);
        this.state.audio.addEventListener('timeupdate',this.onTimeUpdate)
    }
    onTimeUpdate=()=>{
        console.log('ontimeupdate')
        const ratio = this.state.audio.currentTime / this.state.audio.duration * 100;
        this.setState({
            completed:ratio
        })
        if (parseInt(ratio) == 100) {
            this.onFastForward();
        }
    }
    loadMusic = (i)=> {
        localStorage.currentMusic = i;
        this.setState({
            currentMusic: parseInt(localStorage.currentMusic),
            currentMusicItem:this.props.musicList[i],
            completed:0
        }, () => {
            if(this.state.isPlaying){
                this.play();
            }
        })        
    }
    progress = () => {
        if (this.state.completed > 100) {
            this.setState({ completed: 100});
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: this.state.completed + diff });
        }
    }
    onProgress=(e)=>{
        const distance = e.pageX - this.state.progress.offsetLeft;
        this.state.audio.currentTime=distance * (this.state.audio.duration / this.state.progress.offsetWidth)
    }
    play = ()=>{
        this.state.audio.play();
        this.setState({
            isPlaying:true
        })        
        //call back to parent
        if(typeof this.props.onPlay !== 'undefined')
        {
            this.props.onPlay()
        }
    }
    pause=()=>{
        this.state.audio.pause();
        this.setState({
            isPlaying:false
        });
        //call back to parent
        if(typeof this.props.onPause !== 'undefined')
        {
            this.props.onPause()
        }
    }
    onPlay=(isPlaying)=>{
        this.play()        
    }
    onPause=(isPlaying)=>{
        this.pause()
    }
    //上一曲
    onFastRewind=()=>{
        console.log('onFastRewind music')
        if (this.state.prevMusic != -1) {
            this.loadMusic(this.state.prevMusic);
            // prevMusic = randomNum(0, this.state.playlist.length);
        } else if (this.state.currentMusic == 0) {
            this.loadMusic(this.props.musicList.length - 1);
        } else {
            this.loadMusic(parseInt(this.state.currentMusic) - 1);
        }
    }
    //下一曲
    onFastForward=()=>{
        console.log('onFastForward music')
        if (this.state.repeat == 0) {
            this.setState({
                prevMusic:this.state.currentMusic
            })            
            this.setState({
                nextMusic:this.randomNum(0, this.props.musicList.length)
            })
            this.loadMusic(this.state.nextMusic);
        } else if (this.state.currentMusic == this.props.musicList.length - 1) {
            this.loadMusic(0);
        } else {
            this.loadMusic(parseInt(this.state.currentMusic) + 1);
        }
    }
    randomNum = (min, max)=> {
        return Math.floor(parseInt(min) + Math.random() * parseInt(max - min));
    };
    render(){
        return(
            <section className='cd-player-container'>
                    <section className="control-buttons">
                        <section className='fast-rewind-outer'>
                            <FastRewind className='fast-rewind-icon' onClick={this.onFastRewind}/>
                        </section>
                        <section className="cd-outer">
                            <Cd {...this.state} onPlay={this.onPlay} onPause={this.onPause}/>
                        </section>
                        <section className='fast-forward-outer'>
                            <FastForward className='fast-forward-icon' onClick={this.onFastForward}/>
                        </section>
                    </section>
                    <section className='title'>
                        <h1 className='name'>{this.state.currentMusicItem?this.state.currentMusicItem.title:''}</h1>
                        <h2 className="sub-title">{this.state.currentMusicItem?this.state.currentMusicItem.artist:''}</h2>
                    </section>
                    <audio ref={ref=>this.state.audio = ref} id="music" src={this.state.currentMusicItem?this.state.currentMusicItem.mp3:''}></audio>
                    <section className="process-outer" ref={ref=>this.state.progress = ref} >
                        <LinearProgress color="accent" mode="determinate" value={this.state.completed} onClick={this.onProgress}/>
                    </section>
            </section>
        )
    }

}

ReactCdPlayer.propTypes={
    musicList:PropTypes.array.isRequired,
    onPlay:PropTypes.func
}

export default ReactCdPlayer