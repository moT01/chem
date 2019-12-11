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
      contentBeforeLabTable,
      labsForThisCourse = [],
      contentAfterLabTable
    } = this.props.data.contentfulCourse;

    return (
      <Layout>
        <section>
          <div className='courseTemplate-title-wrap'>
            <h2 className='courseTemplate-title'>{classCode} <span className='pipe'>|</span> {classTitle}</h2>
          </div>

          {contentBeforeLabTable !== null ? (
            <div dangerouslySetInnerHTML={{ __html: contentBeforeLabTable.childContentfulRichText.html }} />
          ) : null}

          {labsForThisCourse !== null ? (
            <div className='courseTemplate-lab-wrap'>
              <h3 className='courseTemplate-h2'>Lab Schedule</h3>
              {labsForThisCourse.map((lab, index) => (
                <Link to={lab.id} className='courseTemplate-lab-row' key={index}>
                  <span className='courseTemplate-lab-name'>{lab.title}</span>
                  <span className='courseTemplate-lab-semester'>{lab.date}</span>
                </Link>
              ))}
            </div>
          ) : null }

          {contentAfterLabTable !== null ? (
            <div dangerouslySetInnerHTML={{ __html: contentAfterLabTable.childContentfulRichText.html }} />
          ) : null}
        </section>
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
