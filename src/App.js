import Home from './components/pages/Home'
import Footer from './components//layout/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (

    <Router>
      <Switch>

        <Route exact path='/'>
          <Home />
          <Footer />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
