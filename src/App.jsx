import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  CV,
} from "./components";

import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <CV/>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          {/* <Tech /> */}
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    
  );
};

export default App;
