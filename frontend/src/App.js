import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Login from './login'
import Productdisplay from './Productdisplay.js'
import Signup from './signup.js'
import data from './data'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom'
import productdisplay from './Productdisplay'

function App() {
 
  return (

    <>

      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Content />
            <Footer />
          </Route>
          <Route exact path="/login">

            <Login />
            <Footer />
          </Route>
          <Route exact path="/Signup">

            <Signup />
            <Footer />
          </Route>
          <Route exact path="/product/:id" component={Productdisplay} />
            
            

        </Switch>
     </Router>
    </>
  );
}

export default App;
