
import Website from "./component/website"
import {Items} from "./component/items";
import {Header} from "./component/Header";
import {Fetchnodeservices} from "../src/Fetchnodeservices";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Itemtypes }from "./component/Itemtypes";
import './App.css';

function App() {
  return (
    <>
      <Router> 

        <Route
          exact
          strict
          component={Website}
          path="/website"
         
        ></Route>
         <Route
          exact
          strict
          component={Items}
          path="/item"
         
        ></Route>
        </Router>
    </>
  );
}

export default App;

