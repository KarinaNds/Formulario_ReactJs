import logo from './d65t7e6-16b26703-cf8d-4595-88f7-baa9ebcc2b88.gif';
import './App.css';

function App() {

  const nome = "Karina"
  const idade = "18"
  const aniversario = "20"

  console.log(`Bem vindo, eu sou a ${nome}, tenho ${idade} anos e faço aniversario no dia ${aniversario} de fevereiro`);

  function sum(a,b){
    return a + b
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
        <a
          className="App-link"
          href="https://doctorwhobrasil.com.br/"
          target="_blank"
          rel="noopener noreferrer"

        >

         <p>  Bem vindo </p>

        </a>

        <p> Olá usuario, eu sou a {nome}, tenho {idade} anos, faço aniversario no dia {aniversario} de fevereiro, Obrigado pela visita !!!</p>

        <p>Soma: {sum(9,9)}</p>

      


      </header>
    </div>
  );
}

export default App;
