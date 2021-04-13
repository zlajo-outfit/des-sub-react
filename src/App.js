import React from 'react';

// import components
import Header from './components/header/header.component';
import Body from './components/body/body.component';
import Footer from './components/footer/footer.component';
import Sidebar from './components/sidebar/sidebar.component';

// import css
import './minireset.css';
import './App.css'; 

function App() { 
    return(                   
      <div>
        <Header />
        <Body />
        <Footer />
        <Sidebar />
      </div>
    )
}

export default App;
