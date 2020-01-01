import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';

import './teaching.css';

const TeachingPage = () => {
  const data = useStaticQuery(graphql`
    query TeachingPageQuery {
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
    // sort the courses by the classCode (e.g. "Chem 101")
    return courseA.classCode < courseB.classCode ? -1 : courseA.classCode > courseB.classCode ? 1 : 0 
  });

  return (
    <Layout>
      <section id='teaching-courses'>
        <h2 className='section-heading'>Courses</h2>
				<div className='teaching-courses-wrap'>
					{courses.map((course, index) => (
						<Link to={course.id} className='teaching-course-row' key={index}>
							<span className='teaching-course-name'>
								{course.classCode}&nbsp;&nbsp;
								<span className='pipe'>|</span>
								&nbsp;&nbsp;{course.classTitle}
							</span>
							<span className='teaching-course-semester'>{course.semester}</span>
						</Link>
					))}
				</div>
      </section>
    </Layout>
  );
}

export default TeachingPage;
