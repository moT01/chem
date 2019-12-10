import React from 'react';
import { Helmet } from 'react-helmet';

import chemLogo from '../assets/images/chemLogo.svg';

const Head = () => {
  return (
		<>
			<Helmet
        title='&lrm;'
        link={[
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${chemLogo}` }
        ]}
      >
      </Helmet>
    </>
  )
}

export default Head;
