import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'

// import Landing_90 from "./pages/Landing_90";
import { Landing_90, Dashboard_90, Register_90,Error_90 } from './pages'

function App_90() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard_90/>} />
      <Route path='/landing' element={<Landing_90 />}/>
      <Route path="/register" element={<Register_90/>}/>
      <Route path="*" element={<Error_90 />}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App_90;
