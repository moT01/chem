import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Courses from './courses'
import './main.css'

const Main = () => {
  const data = useStaticQuery(graphql`
    query MainQuery {
      allContentfulCourse {
        edges {
          node {
            slug
            name
            semester
          }
        }
      }
    }
  `);
  
  const courses = data.allContentfulCourse.edges.map(edge => {
    return {
      slug: edge.node.slug,
      name: edge.node.name,
      semester: edge.node.semester
    };
  });

  return (
    <>
      <Courses courses={courses} />
    </>
  );
}

/*Layout.propTypes = {
  children: PropTypes.node.isRequired,
}*/

export default Main;
