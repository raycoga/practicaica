import logo from './logo.svg';
import './App.css';

import FakeTodo from './components/testTodo'


function App() {
  const newProps={
    id:'as5d1as8f528518f1485d5as',
    data:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat, numquam quidem eius aliquid consequuntur atque recusandae, iste fugiat excepturi odit nostrum ullam rerum dolorum adipisci, quo architecto pariatur in.',
    content:(<div>Esta oracion viene de props</div>),
    funcionConsolelog: () =>{
      console.log('Este console.log se esta llevando a cabo en un componente hijo, pero fue enviada por propiedades desde el padre');
    },
    number:123123124,
    array:[1,2,3,4,5,6,7,8],
    someObject:{a:1,b:2,c:3}
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
      </header>
      <div className='container'>
        <FakeTodo {...newProps}/>
      </div>
    </div>
  );
}

export default App;
