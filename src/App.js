import Home from './components/pages/Home'
import Footer from './components/layout/Footer'
import {AuthProvider} from './auth/authContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (

    <Router>
      <AuthProvider>
        <Switch>

          <Route exact path='/'>
            <Home />
            <Footer />
          </Route>

        </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;
