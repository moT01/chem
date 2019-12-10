import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import './main.css';

const Main = () => {
  const data = useStaticQuery(graphql`
    query MainQuery {
      allContentfulCourse {
        edges {
          node {
            id
            classCode
            classTitle
            semester
          }
        }
      }
    }
  `);
  
  const courses = data.allContentfulCourse.edges.map(edge => {
    return {
      id: edge.node.id,
      classCode: edge.node.classCode,
      classTitle: edge.node.classTitle,
      semester: edge.node.semester
    };
  }).sort((courseA, courseB) => { 
    return courseA.classCode < courseB.classCode ? -1 : courseA.classCode > courseB.classCode ? 1 : 0 
  });

  return (
    <section id='main-courses'>
      <h2 className='main-course-h2'>Courses</h2>
      {courses.map((course, index) => (
        <Link to={course.id} className='main-course-row' key={index}>
          <span className='main-course-name'>{course.classCode} | {course.classTitle}</span>
          <span className='main-course-semester'>{course.semester}</span>
        </Link>
      ))}
    </section>
  );
}

export default Main;
