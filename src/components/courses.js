import React from "react"
import { Link } from 'gatsby'

const Courses = (props) => (
	<section id='courses'>
	  <h2>COURSES</h2>
		{props.courses.map((course, index) => (
			<Link to={course.slug} className='course-row' key={index}>
				<span className='course-name'>{course.name}</span>
				<span className='course-semester'>{course.semester}</span>
			</Link>
		))}
	</section>
);

export default Courses;
