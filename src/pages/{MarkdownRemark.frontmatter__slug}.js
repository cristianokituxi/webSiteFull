import React from "react"
import { graphql } from "gatsby";

import BotaoFlutuante from "../components/Btn-flutuante"


export default function Template({
  data, 
}) {
  const { markdownRemark } = data 
  const { frontmatter, html } = markdownRemark
  return (
    <>
    <BotaoFlutuante />
    <div className="blog-post-container">
      <div className="blog-post col-4 text-left" >
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        
        slug
        title
      }
    }
  }
`
// date(formatString: "MMMM DD, YYYY")