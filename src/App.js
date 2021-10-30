import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Reports from './Components/Report/Report';
import Offer from './Components/Offer/Offer';
import Home from './Components/Home/Home';
import Setting from './Components/Setting/Setting';
import Payment from './Components/Payment/Payment'
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App container py-3">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/report" exact component={Reports}/>
          <Route path="/offer" exact component={Offer}/>
          <Route path="/payment" exact component={Payment}/>
          <Route path="/setting" exact component={Setting}/>
          <Route path="/home" exact component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
