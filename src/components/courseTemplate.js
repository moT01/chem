import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from './layout';
import './courseTemplate.css';

class CourseTemplate extends Component {
  render() {
    const {
      classCode,
      classTitle,
      semester,
      contentBeforeLabTable,
      labsForThisCourse = [],
      contentAfterLabTable
    } = this.props.data.contentfulCourse;

    return (
      <Layout>
        <div className='courseTemplate-title-wrap'>
          <h2 className='courseTemplate-title'>{classCode} | {classTitle}</h2>
        </div>

        <div className='courseTemplate-semester'>{semester}</div>

        {contentBeforeLabTable !== null ? (
          <div dangerouslySetInnerHTML={{ __html: contentBeforeLabTable.childContentfulRichText.html }} />
        ) : null}

        {labsForThisCourse !== null ? (
          <h2 className='courseTemplate-h2'>Lab Schedule</h2>
        ) : null }

        {labsForThisCourse !== null ? (
          labsForThisCourse.map((lab, index) => (
            <Link to={lab.id} className='courseTemplate-lab-row' key={index}>
              <span className='courseTemplate-lab-name'>{lab.title}</span>
              <span className='courseTemplate-lab-semester'>{lab.date}</span>
            </Link>
          ))
        ) : null }

        {contentAfterLabTable !== null ? (
          <div dangerouslySetInnerHTML={{ __html: contentAfterLabTable.childContentfulRichText.html }} />
        ) : null}
      </Layout>
    );
  }
}

CourseTemplate.propTypes = {
  data: PropTypes.shape({
    contentfulCourse: PropTypes.shape({
      classCode: PropTypes.string.isRequired,
      classTitle: PropTypes.string.isRequired,
      semester: PropTypes.string.isRequired,
      contentBeforeLabTable: PropTypes.shape({
        childContenfulRichText: PropTypes.shape({
          html: PropTypes.string
        })
      }),
      labsForThisCourse: PropTypes.array,
      contentAfterLabTable: PropTypes.shape({
        childContenfulRichText: PropTypes.shape({
          html: PropTypes.string
        })
      })
    })
  })
};

export default CourseTemplate;

export const pageQuery = graphql`
  query ContentfulCourseById($id: String!) {
    contentfulCourse( id: { eq: $id }) {
      id
      classCode
      classTitle
      semester
      contentBeforeLabTable {
        childContentfulRichText {
          html
        }
      }
      labsForThisCourse {
        date
        id
        title
      }
      contentAfterLabTable {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
