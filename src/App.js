import React from 'react';
import './App.css';

import CarouselContainer from './components/carousel/carousel.component.jsx';
import NavbarContainer from './components/navbar/navbar.component';
import OverlayCards from './components/OverlayCards/overlayCards.component';
import Econtainer from './components/FourEs/FourEs.component';
import FooterContainer from './components/footer/footer.component';

const App = () => {
  return(
    <div>
      <NavbarContainer/>
      <CarouselContainer/>
      <OverlayCards/>
      <Econtainer/>
      <FooterContainer/>
    </div>
  )
}

export default App;
