import './App.css';
import Message from "./Message.js";

function App(props) {

    const topPosition = '40px';

    return (
        <div className="App">
            <header
                className={`App-header ${props.showRed ? 'header-red' : 'header-blue' }`}
                    style={{top: topPosition || '10px'}}>
                My first React App
                <h3>Hello, {props.name}!</h3>
                <div style={{paddingTop: '25px', backgroundColor: 'red'}}>
                    <Message text = {'Задание по первому уроку выполнено!'}></Message>
                </div>
            </header>
        </div>
    );
}


export default App;
