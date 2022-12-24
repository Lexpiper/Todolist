import { useState } from "react";
import { close, logo, menu } from "./assets";

import styles from "./style";
import {
  About,
  Business,
  Button,
  Careers,
  Footer,
  Hero,
  Integrations,
  Navbar,
  Pricing,
} from "./components";

function App() {
  return (
    <div className="App">
      <div className={`sm:px-16 px-1 ${styles.flexStart} bg-primary` }>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>  

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Integrations />
        </div>
      </div>
    </div>
  );
}

export default App;
