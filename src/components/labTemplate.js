import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from './layout';

class LabTemplate extends Component {
  render() {
    console.log(this.props);
/*    const post = this.props.data.contentfulPost;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
*/
    return (
      <Layout>
        <h1>
          Hello Lab
        </h1>
      </Layout>
    )
  }
}

export default LabTemplate;

/*export const pageQuery = graphql`
  query ContentfulCoursesBySlug($slug: String!) {
    contentfulCourse( slug: { eq: $slug }) {
      title
    }
  }
`*/
