import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby';

import './students.css'

const Students = () => {
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
      <section>
        <h2 className="section-heading">Students</h2>

        {/*publicationList !== null ? (
          <div className='publications-content' dangerouslySetInnerHTML={{ __html: publicationList }} />
        ) : null*/}
      </section>
    </>
  )
}

export default Students
