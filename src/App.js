import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Call from './pages/Call/Call'
import Keynote from './pages/Keynote/Keynote';
import Registration from './pages/Registration/Registration';
import Committee from './pages/Committee/Committee'
import Award from './pages/Award/Award';
import Partner from './pages/Partners/Partners'

class App extends Component {

  componentDidMount() {
    // const history = useHistory();

    let path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      console.log(this.props);
      this.props.history.push(path);
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Router basename={window.location.pathname || ''}> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/call-for-paper' component={Call} />
          <Route path='/keynote-speakers' component={Keynote} />
          <Route path="/registration" component={Registration} />
          <Route path='/committee' component={Committee} />
          <Route path='/our-partners' component={Partner} />
          <Route path='/accomodation' component={Award} />
        </Switch>
        {/* </Router> */}
      </div>
    );
  }
}

export default withRouter(App);
