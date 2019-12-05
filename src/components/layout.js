/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './layout.css'


const Layout = ({children}) => {
  return (
    <div className='page-wrap'>
      <Header />
        <div className='content-wrap'>
          {children}
        </div>
      <Footer />
    </div>
  )
}

/*Layout.propTypes = {
  children: PropTypes.node.isRequired,
}*/

export default Layout
