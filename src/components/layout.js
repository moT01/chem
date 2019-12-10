import React from 'react';

import Header from './header';
import Head from './head';
import Footer from './footer';

import './fonts.css';
import './global.css';
import './layout.css';

const Layout = ({children}) => {
  return (
    <div className='page-wrap'>
      <Head />
      <Header />
        <div className='content-wrap'>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout
