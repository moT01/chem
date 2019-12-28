import React from 'react';

import Layout from '../components/layout/layout';
import Headshot from '../assets/images/headshot.jpg';
import './index.css';

const IndexPage = () => (
  <Layout>
    <div className='index-about-wrap'>
      <img className='index-headshot-img' src={Headshot} alt='Doctor Joseph Mondloch' />
      <div className='index-info-wrap'>
        <h2>Joseph E. Mondloch</h2>
        <h6>Assistant Professor of Chemistry</h6>
        <h6>University of Wisconsin-Stevens Point</h6>
        <div className='h7'>email: <a href='mailto:jmondloc@uwsp.edu'>jmondloc@uwsp.edu</a></div>
        <div className='h7'>phone: <a href='tel:3177594940'>(715) 346-3715</a></div>
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </Layout>
);

export default IndexPage;
