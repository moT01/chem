import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';
import chemLogo from '../../assets/icons/chemLogo.svg';
import './layout.css';

const Layout = ({children}) => {
  return (
    <>
      <Helmet
        title='&lrm;'
        link={[
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${chemLogo}` }
        ]}
      >
      </Helmet>

      <div className='page-wrap'>
        <Header />
          <div className='content-wrap'>
            {children}
          </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
