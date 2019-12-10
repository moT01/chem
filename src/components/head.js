import React from 'react';
import { Helmet } from 'react-helmet';

import chemLogo from '../assets/images/chemLogo.svg';
// import viga from '../assets/fonts/Viga-Regular.tff';

const Head = () => {
  return (
		<>
			<Helmet
        title='&lrm;'
        link={[
          { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${chemLogo}` }
        ]}
      >
        {/*<link
          as='font'
          crossOrigin='anonymous'
          href={viga}
          rel='preload'
          type='font/truetype'
        />*/}
      </Helmet>
    </>
  )
}

export default Head;
