import {React} from 'react';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
import { Route, BrowserRouter} from "react-router-dom";
import Navigation from './components/Navigation';
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route path = "/" element= {<Home/>}/>
            <Route path = "/competences" element= {<Knowledges/>}/>
            <Route path = "/portfolio" element= {<Portfolio/>}/>
            <Route path = "/contact" element= {<Contact/>}/>
            <Route  element= {<NotFound/>}/>
          </Switch>
      </BrowserRouter>     
    </div>
  );
}

export default App;
