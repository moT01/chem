import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby';
import sponge from '../assets/images/sponge.png'
import mof from '../assets/images/mof.png'

import './researchInterests.css'

const ResearchInterests = () => (
  <>
    <section id="researchInterests">
      <h2 className="section-heading">Research Interests</h2>

      <div className="researchInterests-content">
        <p className="font-size-7">
          Welcome to the research page of Dr. Mondloch. We are inorganic and
          materials chemists focused on studying porous solids. Porous solids
          contain void spaces which allow them to function as molecular sponges
          (you know, that thing over there on the right that sits by the sink
          that soaks up soap and water). Just like a regular sponge,{' '}
          <img className="researchInterests-sponge" src={sponge} alt="sponge" />
          gases and liquids are attracted to the internal surfaces of porous
          solids—a property that allows them to function as practical materials
          for things like gas storage, purification of water, and the
          sustainable production of organic and inorganic molecules via
          catalysis.
        </p>
        <p className="font-size-7">
          We are particularly interested in the synthesis and applications of a
          class of porous materials called metal–organic frameworks (aka MOFs).
          MOFs are often built by combining metals (i.e., nodes) and organic
          molecules (i.e., linkers) in solution. When properly chosen these
          components assemble into an almost limitless number of porous solid
          combinations. Our group aims to understand the synthesis of MOFs and
          develop MOF-based catalysts with unique reactivity. Students in our
          group receive one-on-one mentoring and learn how to synthesize and
          modify MOFs, characterize them using powder X-ray diffraction,
          nitrogen adsorption analysis, thermal analysis (SDT and DSC), and
          spectroscopic methods (e.g., NMR, IR, and UV-vis). If all goes well,
          students will carry out catalytic chemistry with their MOFs.
        </p>
        <img className="researchInterests-mof" src={mof} alt="mof" />
        <p className="font-size-7">
          Interested in learning more about our research? Drop me an email at{' '}
          <a href="mailto:jmondloc@uwsp.edu">jmondloc@uwsp.edu.</a>
        </p>
      </div>
    </section>
  </>
)

export default ResearchInterests
