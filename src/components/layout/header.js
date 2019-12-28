import React from "react"
import { Link } from "gatsby"

import './header.css'

const Header = () => (
	<div className='header-wrap'>
		<div className='header-logo'>LOGO</div>
		<div className='header-links-wrap'>
			<Link className='header-link' to='/'>home</Link>
			<Link className='header-link' to='/teaching'>teaching</Link>
			<Link className='header-link' to='/research'>research</Link>
			<Link className='header-link' to='/more'>more</Link>
		</div>
	</div>
);

export default Header;
