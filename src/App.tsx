import Home from './pages/Home'
import { createGlobalStyle } from 'styled-components'

function App() {

  const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      font-family: 'Montserrat';
    }
  `

  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
