import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../layout/layout'
import './labTemplate.css'

class LabTemplate extends Component {
  render() {
    const {
      title,
      date,
      htmlContent,
      pdfContent,
    } = this.props.data.contentfulLab

    return (
      <Layout>
        <section id="labTemplate-section">
          <h2>{title}</h2>
          <h2>{date}</h2>

          {/*pdfContent !== null ? (
						<iframe src={pdfContent[0].file.url} className='pdf-content'></iframe>
					) : null*/}

          {pdfContent !== null ? (
            <h2>
              <a
                href={'https://' + pdfContent[0].file.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Lab
              </a>
            </h2>
          ) : null}

          {htmlContent !== null ? (
            <div
              dangerouslySetInnerHTML={{
                __html: htmlContent.childContentfulRichText.html,
              }}
            />
          ) : null}
        </section>
      </Layout>
    )
  }
}

LabTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulLab: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      pdfContent: PropTypes.array,
      htmlContent: PropTypes.shape({
        childContenfulRichText: PropTypes.shape({
          html: PropTypes.string,
        }),
      }),
    }),
  }),
}

export default LabTemplate

export const pageQuery = graphql`
  query ContentfulLabById($id: String!) {
    contentfulLab(id: { eq: $id }) {
      title
      date
      htmlContent {
        childContentfulRichText {
          html
        }
      }
      pdfContent {
        file {
          url
        }
      }
    }
  }
`
