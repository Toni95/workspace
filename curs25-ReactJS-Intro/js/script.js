/*global ReactDOM */

const rootElement = document.getElementById('root');
    // console.log(rootElement);
    // // const reactEl = React.createElement('div', {}, 'My first React Element');
    // // ReactDOM.render(reactEl, rootElement);
      
    // ReactDOM.render(
    //  <div>This a react component</div>,
    //  rootElement
    // );
    
    // function Timer(props) {
    //     return <h3>Curent Time is: {props.time}</h3>
    // }
    
    class Timer extends React.Component {
        render() {
            return <h3>Curent Time is: {this.props.time}</h3>
        }
    }
    
    const tick = () => {
       const currentTime = new Date(Date.now()).toTimeString();
     
    ReactDOM.render(
     <div>
         <Timer time={currentTime}/>
     </div>,
     rootElement
    );
    };
    
    setInterval(tick, 1000);