import { BrowserRouter } from 'react-router-dom'

import { Header } from './components'
import { GlobalStyle } from './App.styles'
import { routes } from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
