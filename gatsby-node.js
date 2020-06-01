exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  // extend Post & Page interfaces with new fields
  const typeDefs = `
    interface Post @nodeInterface {
      link: String
    }
    interface Page @nodeInterface {
      link: String
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers, schema }) => {
  // create new fields to reflect the changes in interface and resolve them to node fields
  createResolvers({
    MdxPost: {
      link: {
        type: `String`,
        resolve: source => source.fields.link,
      }
    },
    MdxPage: {
      link: {
        type: `String`,
        resolve: source => source.fields.link,
      }
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // add node fields with data from frontmatter of the parent Mdx class
  if (node.internal.type === `MdxPost` || node.internal.type === `MdxPage`) {
    const parent = getNode(node.parent);
    createNodeField({
      node,
      name: "link",
      value: parent.frontmatter.link
    });
  }
}
