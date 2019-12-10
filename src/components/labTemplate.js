import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from './layout';
import './labTemplate.css'

class LabTemplate extends Component {
  render() {
    console.log(this.props);

    const {
      title,
      date,
      htmlContent,
      pdfContent
    } = this.props.data.contentfulLab;

    return (
      <Layout>
        <h2>title</h2>
        <h2>date</h2>
        
        {pdfContent !== null ? (
          <iframe src={pdfContent.file.url}></iframe>
        ) : null}

        {htmlContent !== null ? (
          <div dangerouslySetInnerHTML={{ __html: htmlContent.childContentfulRichText.html }} />
        ) : null}
      </Layout>
    )
  }
}

LabTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulLab: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      pdfContent: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string
        })
      }),
      htmlContent: PropTypes.shape({
        childContenfulRichText: PropTypes.shape({
          html: PropTypes.string
        })
      })
    })
  })
};

export default LabTemplate;

export const pageQuery = graphql`
  query ContentfulLabById($id: String!) {
    contentfulLab( id: { eq: $id }) {
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
