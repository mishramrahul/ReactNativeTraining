import './App.css';

import Header from './components/Header'
import MenuHeader from './components/MenuHeader'
import Discriptions from './components/Discriptions'
import DiscriptionsDetail from './components/DiscriptionsDetail'
import CompanyFacts from './components/CompanyFacts'
import Footer from './components/Footer'
import { useState } from 'react';


function App() {


  return (
    <div>

      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
      <Header></Header>
      <MenuHeader></MenuHeader  >
      <DiscriptionsDetail></DiscriptionsDetail>
      <CompanyFacts></CompanyFacts>
      <Footer></Footer>

    </div>

  );
}

export default App;

