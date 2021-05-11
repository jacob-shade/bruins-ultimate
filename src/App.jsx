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
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/roster" component={Roster} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
