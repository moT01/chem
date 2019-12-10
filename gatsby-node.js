const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const courseTemplate = path.resolve(`./src/components/courseTemplate.js`);
  const labTemplate = path.resolve(`./src/components/labTemplate.js`);

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

  // Create blog posts pages.
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

/*exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}*/

/*const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
	const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
	`)
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/tutorials.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
  console.log(JSON.stringify(result, null, 4))
}
*/
