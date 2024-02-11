import React from 'react';
import { TrackingProvider } from './Tracking';
import {Navbar, Footer} from "./Components";
import MyApp from "./MyApp";
import './App.css';


function App() {
  return (
   <>
   <TrackingProvider>
   <Navbar/>
   <MyApp/>
   </TrackingProvider>
   <Footer/>
   </>
  );
}

export default App;
