import React from 'react'

import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => (
  <div>
    <h2>Posts</h2>
    {data
      .allMarkdownRemark
      .edges
      .map(({node}) => (<PostListing key={node.id} post={node}/>))}
  </div>
)

export default IndexPage

export const query = graphql `
query SiteMeta {
	site {
    siteMetadata {
      title
      description
    }
  }
  allMarkdownRemark(sort: {
    fields: [
      frontmatter___date
    ],
    order: DESC
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD YYYY")
          type
        }
        fields {
          slug
        }
        html
        excerpt(pruneLength: 28)
      }
    }
  }
}
`;
