import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import About from './components/pages/About';
import Schedule from './components/pages/Schedule';
import Roster from "./components/pages/Roster";
import FAQs from './components/pages/FAQs';
import Events from './components/pages/Events';
import SignUp from './components/pages/SignUp';
import Payment from './components/pages/Payment';
import Donate from './components/pages/Donate';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/roster" component={Roster} />
        <Route path="/events" component={Events} />
        <Route path="/payment" component={Payment} />
        <Route path="/donate" component={Donate} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
