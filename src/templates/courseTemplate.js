import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from '../components/layout';

class CourseTemplate extends Component {
  render() {
    console.log(this.props);
    const course = this.props.data.contentfulCourse;

    return (
      <Layout>
        {course.name}
        {course.semester}
        <h1>
          Labs
        </h1>
        {course.labsForThisCourse.length > 1 ? course.labsForThisCourse.map((lab, index) => (
          <Link to={lab.slug} className='course-row' key={index}>
            <span className='course-name'>{lab.title}</span>
            <span className='course-semester'>{lab.date}</span>
          </Link>
        ))}
      </Layout>
    )
  }
}

export default CourseTemplate;

export const pageQuery = graphql`
  query ContentfulCourseBySlug($slug: String!) {
    contentfulCourse( slug: { eq: $slug }) {
      name
      semester
      labsForThisCourse {
        date
        slug
        title
      }
    }
  }
`
