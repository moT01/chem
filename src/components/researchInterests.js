import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import './researchInterests.css';

const ResearchInterests = () => {
  /*const data = useStaticQuery(graphql`
    query PublicationsQuery {
			allContentfulPublicationList {
				edges {
					node {
						childContentfulPublicationListListRichTextNode {
							childContentfulRichText {
								html
							}
						}
					}
				}
			}
    }
  `);

	const richText = data.allContentfulPublicationList.edges[0].node.childContentfulPublicationListListRichTextNode.childContentfulRichText.html || null;
	const publicationList = richText.replace(/<a/g, '<a rel="noopener noreferrer" target="_blank" rel="noopener noreferrer" target="_blank"');
*/
  return (
		<>
      <section id='researchInterests'>
        <h2 className='researchInterests-heading'>Research Interests</h2>

				<p className='researchInterests-content h7'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>

				{/*publicationList !== null ? (
          <div className='publications-content' dangerouslySetInnerHTML={{ __html: publicationList }} />
        ) : null*/}
      </section>
    </>
  );
}

export default ResearchInterests;
