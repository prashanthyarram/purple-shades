import './App.css'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Login from './Login'
import Productdisplay from './Productdisplay.js'
import Signup from './Signup.js';
import Cart from './Cart.js'
import Registerproduct from './Registerproduct'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom'



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
         
          <Route path="/cart/:_id" >
          <Cart/>
          </Route>
          <Route exact path='/cart'>
             <Cart/>
          </Route>
          <Route exact path='/registerproduct'>
             <Registerproduct/>
          </Route>

          <Route exact path="/login">
          <Header />
            <Login />
            <Footer />
          </Route>
          <Route exact path="/Signup">

            <Signup />
            <Footer />
          </Route>
          <Route exact path="/api/products/:_id" component={Productdisplay} />
            
            

        </Switch>
     </Router>
    </>
  );
}

export default App;
