import cd from '../assets/css/Cd.css'

import React from 'react'
import Grid from 'material-ui/Grid';
import PlayArrow from 'material-ui-icons/PlayArrow';
import Pause from 'material-ui-icons/Pause';
import cn from 'classnames'

export default class Cd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    componentDidMount(){
        console.log(`isPlaying=${this.props.isPlaying}`)
    }
    onPlay=(e)=>{
        console.log('this is cd onPlay')
        e.preventDefault();

        console.log(`isPlaying=${this.props.isPlaying}`)
        this.props.onPlay(this.props.isPlaying);
    }
    onPause=(e)=>{
        console.log('this is cd onPlay')
        e.preventDefault();
        this.props.onPause(this.props.isPlaying);
    }
    render(){
        let coverClass = cn(
            {
                'cd-cover':true,
                'playing':this.props.isPlaying
            });
        return(
            <div className="cd-container">
                <Grid container spacing={0}>
                     <Grid item xs >
                        <div className={coverClass}>
                            <img className="cover" src={this.props.currentMusicItem?this.props.currentMusicItem.cover:''} alt=""/>
                            <div className="control-center">
                                {
                                        !this.props.isPlaying?
                                        (<PlayArrow className="play-icon" onClick={this.onPlay}/>)
                                        :
                                        (<Pause className="pause-icon"  onClick={this.onPause}/>)
                                }
                            </div>
                        </div>
                    </Grid>
                </Grid>
                
            </div>
        )
    }

}