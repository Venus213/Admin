import logo from "./logo.svg";
import "./App.css";
import { Team } from "./Component/Team/Team";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Sidebar } from './Component/sidebar/Sidebar';
// import { Footer } from './Component/footer/Footer';
// import { Navber } from './Component/header/Navber';
// import { Teamprops } from './Component/Team/teamprops';
// import { Portfolio } from './Component/Gallery/gallery';
import { Offer } from "./Component/Offer/offer";
import { Blog } from "./Component/Blog/blog";
import { Price } from "./Component/Price/price";
import { Galleryprops } from "./Component/Gallery/gallerypros";
import Drawer from "./Component/drawer/Drawer";
import { Services } from "./Component/service/Service";
import { Servicerprops } from "./Component/service/serviceprops";
import { Portfolio } from "./Component/Gallery/gallery";
import { Single } from "./Component/Single/Single";
import { Signup } from "./Component/Login/Signup";
import { Priceprops } from "./Component/Price/priceprops";
import { Offerprops } from "./Component/Offer/offerprops";
import { Dashboard } from "./Component/Dashboard/dashboard";
import { Appointmentes } from "./Component/Appoinmentes/appoinmentes";
import { Contact } from "./Component/Contact/contact";
import { Feedback } from "./Component/Feedback/Feedback";

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      {/* <Navber /> */}
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/Drawer">
          <Drawer />
        </Route>
        <Route path="/team">
          <Team />
        </Route>
        <Route path="/price/:name?">
          <Price />
        </Route>
        <Route path="/priceprops">
          <Priceprops />
        </Route>
        <Route path="/gallery">
          <Portfolio />
        </Route>
        <Route path="/galleryprops">
          <Galleryprops />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/offerprops">
          <Offerprops />
        </Route>
        <Route path="/service">
          <Services />
        </Route>
        <Route path="/serviceprops">
          <Servicerprops />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/feedback">
          <Feedback/>
        </Route>

        {/* <Route path="/contact">
          <Contact />
        </Route> */}

        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/single/:id?">
          <Single />
        </Route>
        <Route path="/appoinmentes">
          <Appointmentes />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;