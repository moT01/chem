import React from 'react'

import Layout from '../components/layout/layout'
import Headshot from '../assets/images/headshot.jpg'
import './index.css'

const IndexPage = () => (
  <Layout>
    <section id="index-about-section">
      <img
        className="index-headshot-img"
        src={Headshot}
        alt="Doctor Joseph Mondloch"
      />
      <div className="index-info-wrap">
        <h1 className="font-size-2">Joseph E. Mondloch</h1>
        <h2 className="font-size-6">Assistant Professor of Chemistry</h2>
        <h2 className="font-size-6">University of Wisconsin-Stevens Point</h2>
        <h2 className="index-contact font-size-6">
          <a href="mailto:jmondloc@uwsp.edu">jmondloc@uwsp.edu</a>
          <span className="pipe">&nbsp; | &nbsp;</span>
          <a href="tel:7153463715">(715)&nbsp;346-3715</a>
        </h2>
      </div>
    </section>
    <section id="index-intro-statement-section" className="h7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </section>
  </Layout>
)

export default IndexPage
