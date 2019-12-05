import React from "react"
import { Link } from "gatsby"

import './header.css'

const Header = () => (
	<div className='header'>
		<Link className='header-logo' to='/'>HOME</Link>
	</div>
);

export default Header;
