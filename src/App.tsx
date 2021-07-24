import { BrowserRouter } from 'react-router-dom'
import { Header } from './components'
import { GlobalStyle, MainContainer } from './global/style'
import { routes } from './routes'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <MainContainer>
          { routes }
        </MainContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
