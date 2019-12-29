const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const courseTemplate = path.resolve(`./src/components/templates/courseTemplate.js`);
  const labTemplate = path.resolve(`./src/components/templates/labTemplate.js`);

  const result = await graphql(`
    {
      allContentfulCourse {
        edges {
          node {
            id
          }
        }
      }
      allContentfulLab {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const courses = result.data.allContentfulCourse.edges;
  const labs = result.data.allContentfulLab.edges;
 
  courses.forEach(course => {
    createPage({
      path: course.node.id,
      component: courseTemplate,
      context: {
        id: course.node.id,
      },
    });
  });

  labs.forEach(lab => {
    createPage({
      path: lab.node.id,
      component: labTemplate,
      context: {
        id: lab.node.id,
      },
    });
  });
}
