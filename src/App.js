import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Contact from './Pages/Contact/Contact';
import Messege from './Pages/Contact/Messege/Messege';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Header/Header';
import Doctors from './Pages/Home/Doctors/Doctors';
import Slider from './Pages/Home/Slider/Slider';
import Treatment from './Pages/Home/Treatment/Treatment';
import Services from './Pages/Services/Services';
import AuthProvider from './context/AuthProvider';
import PrivetRout from './Pages/Login/PrivetRout/PrivetRout';
import ServicesFixed from './Pages/Services/ServicesFixed';
import NotFound from './Pages/NotFound/NotFound';
import ExtraCompo from './Pages/ExtraCompo/ExtraCompo';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Slider></Slider>
              <Services></Services>
              <Doctors></Doctors>
              <Treatment></Treatment>
            </Route>
            <Route path='/home'>
              <Slider></Slider>
              <Services></Services>
              <Doctors></Doctors>
              <Treatment></Treatment>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <PrivetRout path='/services'>
              <ServicesFixed></ServicesFixed>
            </PrivetRout>
            <PrivetRout path='/booking/:serviceId'>
              <Booking></Booking>
            </PrivetRout>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/messege'>
              <Messege></Messege>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivetRout path='/extra'>
              <ExtraCompo></ExtraCompo>
            </PrivetRout>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>






      
      
      
      
      
      
    </div>
  );
}

export default App;
