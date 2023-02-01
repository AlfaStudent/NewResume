import {React} from 'react';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Navigation from './components/Navigation';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>    
          <Routes>
            <Route path = "/" element= {<Home/>}/>
            <Route path = "/competences" element= {<Knowledges/>}/>
            <Route path = "/portfolio" element= {<Portfolio/>}/>
            <Route path = "/contact" element= {<Contact/>}/>
            <Route path = "*" element= {<NotFound/>}/>
            
          </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
