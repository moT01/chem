import React from "react"
import { Link } from "gatsby"

import './nav.css'

const Nav = () => (
	<nav className='nav-wrap'>
		<div className='nav-logo'></div>
		<div className='nav-links-wrap'>
			<Link className='nav-link' to='/'>Home</Link>
			<Link className='nav-link' to='/teaching'>Teaching</Link>
			<Link className='nav-link' to='/research'>Research</Link>
			<Link className='nav-link' to='/more'>More</Link>
		</div>
	</nav>
);

export default Nav;
