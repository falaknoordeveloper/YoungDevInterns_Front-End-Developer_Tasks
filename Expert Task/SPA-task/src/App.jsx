 
import { BrowserRouter } from 'react-router-dom'
import Navigator from './config/Navigator'
import Navbar from './components/Navbar'
import Signup from './components/signup'
import { ContextProvider } from './helper/ContextApi'

const App = () => {
  return (
    <BrowserRouter>
    <ContextProvider>
    <Signup/>
    <Navbar/>
    <Navigator/>
    </ContextProvider>
    </BrowserRouter>
    
    
  )
}

export default App