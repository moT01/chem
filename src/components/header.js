import React from "react"
import { Link } from "gatsby"

import './header.css'

const Header = () => (
	<div className='header-wrap'>
		<div className='header-logo'>LOGO</div>
		<div className='header-links-wrap'>
			<Link className='header-link' to='/'>about</Link>
			<Link className='header-link' to='/'>research</Link>
			<Link className='header-link' to='/'>publications</Link>
			<Link className='header-link' to='/'>students</Link>
			<Link className='header-link' to='/'>more</Link>
		</div>
	</div>
);

export default Header;
