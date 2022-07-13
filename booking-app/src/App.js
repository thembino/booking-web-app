import './App.css';
import Home from './pages/homePage';
import Hotels from './pages/Hotels'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<Hotels/>}/>
    </Routes>
    </BrowserRouter>
     
  );
}

export default App;
