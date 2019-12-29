import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './publications.css';

const Publications = () => {
  const data = useStaticQuery(graphql`
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
	const publicationList = richText
		.replace(/<a/g, '<a rel="noopener noreferrer" target="_blank"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>');

  return (
		<>
      <section id='publications'>
        <h2 className='publications-heading'>Publications</h2>

				{publicationList !== null ? (
          <div className='publications-content' dangerouslySetInnerHTML={{ __html: publicationList }} />
        ) : null}
      </section>
    </>
  );
}

export default Publications;
