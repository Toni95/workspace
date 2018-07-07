 const rootElement = document.getElementById("root");
   // const reactEl = React.createElement("div", {}, "My fist react element");
    // ReactDOM.render(reactEl, rootElement);
    
     function DisplayScore(props){
            if (props.score1>props.score2) {
            return <h3>Player 1 castiga cu {props.score1} la {props.score2}</h3>
            } else if (props.score2>props.score1) {
                return <h3>Player 2 castiga cu {props.score2} la {props.score1}</h3>
            }else{
                return <h3>egalitate</h3>
            }  
    }
    
    var scor1 = Math.floor(Math.random(0) * 10);
    var scor2 = Math.floor(Math.random(0) * 10);

    const score = function() {
    
    ReactDOM.render(
        <div>
            <DisplayScore score1 = {scor1} score2 = {scor2} />
        </div>,
        rootElement
        );
};
    
    score();