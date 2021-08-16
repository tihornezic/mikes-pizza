import Home from './components/pages/Home'
import Payment from './components/pages/Payment'
import RecentOrders from './components/pages/RecentOrders'
import Footer from './components/layout/Footer'
import {AuthProvider} from './auth/authContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51ItgkCInXwhbaKEHWoOZ5cRB6ipTIVcVWk6JQhbJVM7leJTyU9TA5e2x1UuK1BGrnvykOWBcus5BvxkfMa5kRZwM00PRqjtco7'
)

function App() {

  return (

    <Router>
      <AuthProvider>
        <Switch>

          <Route exact path='/'>
            <Home />
            <Footer />
          </Route>

          <Route path='/payment'>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <Footer /> */}
          </Route>

          <Route path='/recent-orders'>
            <RecentOrders />
          </Route>

        </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;
