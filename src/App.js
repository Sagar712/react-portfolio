import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';

function App() {

  const[curr_page, setCurr_Page] = useState(<Page1/>);
  let arr_Pages = [<Page1/>, <Page2/>, <Page3/>, <Page4/>, <Page5/>];

  function incCnt(PageId){
    setCurr_Page(arr_Pages[PageId]);
  }
  

  return (
    <div>
      <Router>
      <Header incCnt={(PageId) => incCnt(PageId)}/>
      <div className="adjus"></div>
      {/*curr_page*/}

      
        <Switch>
          
          <Route path="/skills">
            <Page2/>
            <Page3/>
          </Route>
          <Route path="/about">
            <Page3/>
          </Route>
          <Route path="/myapp">
            <Page4/>
          </Route>
          <Route path="/contact">
            <Page5/>
          </Route>
          <Route path="/home">
            <Page1/>
            <Page2/>
            <Page3/>
          </Route>
          <Route path="/">
            <Page1/>
            <Page2/>
            <Page3/>
          </Route>
        </Switch>
      </Router>
      
      <Footer/>
      
    </div>
  );
}

export default App;
