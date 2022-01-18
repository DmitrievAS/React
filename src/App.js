import './App.css';
import Message from "./Message.js";
import {useState} from "react";

function App(props) {

    const topPosition = '40px';
    const [value,setValue] = useState(0);
    // TODO: доделать из лекции
    const handleInput = (event) => {
        const {value} = event.target;
        setValue(event) }

    const variableInit = useState(0);
    const variable = variableInit[0];
    const setVariable = variableInit[1];

    const updateCount = () => setCount(prevCount => prevCount + 1);

    return (
        <div className="App">
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue' }`}
                    style={{top: topPosition || '10px'}}>
                My first React App
                <span className="counter">{value}</span>
                <input onChange={handleInput} value={value}/>
                <button onClick={updateCount} className="counter-button">Click!</button>
                <div style={{paddingTop: '25px', backgroundColor: 'red'}}>
                    <Message></Message>
                </div>
            </header>
        </div>
    );
}

// class App extends React.Component {
//     state = {
//         count: 0,
//         name: 'Igor'
//     }
//     updateCount = () => {
//         //const count = this.state.count
//         this.setState( {
//             count: count + 1
//         })
//     }
//
//
//     render () {
//         return (<div>
//             <span className="counter">{this.state.count}</span><br/>
//             <button onClick={updateCount} className="counter-button">Click!</button>
//         </div>)
//     }
// }

export default App;
