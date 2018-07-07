import React from 'react';
//component definition using ES6 classes
class Timer extends React.Component {
    constructor() {
        // console.log("Hey from constructor");
        super();
        this.state = {
            time: 0,
        }
        
        // you'll need to do this binding for all event
        // handler function in order to avoid having 'this' set to undefined
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
    }
    componentWillMount(){
        // console.log("Hey from componentWillMount");
       
    }
    
    componentDidMount(){
        // console.log("Hey from componentDidMount");
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // console.log("Hey from shouldComponentUpdate");
        // if (this.state.time % 2 === 0) {
        //     return false;
        // }
        // return true
        // console.log("shouldComponentUpdate:", this.state.time);
        // return this.state.time % 2 === 0 ? false : true;
        // return nextState.time % 2 === 0 ? false : true;
        // if (this.state.time > 10) {
        //     clearInterval(this.intervalId);
        // }
        // return this.state.time>10 ? false : true;
        return true;
        
    }
    
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        // console.log("Incrementing timer to:", this.state.time + 1)
        this.setState({
            time:this.state.time + 1
        });
    }
    
    onStart() {
        console.log(this);
        console.log("Start btn clicked");
         this.intervalId = setInterval(this.tick.bind(this), 1000);
    }
    
    onStop() {
        console.log("Stop btn clicked");
        clearInterval(this.intervalId);
    }
    
    render() {
        // console.log("Hey from render");
        // console.log("render", this.state.time);

        return <div>
                <h1>My timer component</h1>
                <h3>Current Time is: {this.state.time}</h3>
                <button onClick={this.onStart} className={this.state.time > 0 ? 'disabled': ''}>Start</button>
                <button onClick={this.onStop}>Stop</button>
            </div>
    }
}

export default Timer;