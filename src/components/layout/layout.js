import React from 'react';
import { Helmet } from 'react-helmet';

import Nav from './nav';
import Footer from './footer';
import chemLogo from '../../assets/icons/chemLogo.svg';
import './layout.css';

const Layout = ({children}) => (
	<>
		<Helmet
			title='Joseph E. Mondloch'
			link={[
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: `${chemLogo}` }
			]}
		>
		<html lang="en" />
		</Helmet>

		<Nav />
			<main className='content-wrap'>
				{children}
			</main>
		<Footer />
	</>
);

export default Layout;
