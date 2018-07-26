import React from 'react'

const PostPage = (props) => {
    const {data} = props;
    return (
        <div>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div>{data.markdownRemark.frontmatter.date}</div>
            <div
                dangerouslySetInnerHTML={{
                __html: data.markdownRemark.html
            }}/>
        </div>
    )
}

export default PostPage;

export const query = graphql `
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {
            slug: {
            eq: $slug
            }
        }) {
            excerpt
            html
            frontmatter {
                title
                date(formatString: "MMMM DD YYYY")
                type
            }
        }
    }
`;