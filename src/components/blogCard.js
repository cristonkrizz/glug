import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"
import Card from "./card"
import { Box, Text } from "rebass"

const BlogCard = styled(Card)({
  width: "80%",
  height: "100%",
  margin: "10px 0px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#F0F0F0",
})
const BlogDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  flexFlow: "column",
  alignItems: "top",
  justifyContent: "flex-start",
  padding: "40px",
})

const Links = styled(Link)({
  textDecoration: "none",
  color: "inherit",
})

const BCard = ({ data, readTime }) => (
  <BlogCard>
    <Box width={[3 / 5, 1 / 3, 1 / 3]}>
      <Img
        style={{ borderRadius: "20px" }}
        fluid={data.cover.childImageSharp.fluid}
      />
    </Box>
    <BlogDetails>
      <Text fontSize={[2, 5, 5]} my={1} fontWeight="bolder">
        <Links to={data.path}>{data.title}</Links>
      </Text>
      <Text fontSize={[2]}>{data.date}</Text>
      <Text fontSize={[2]}>{readTime}</Text>
    </BlogDetails>
  </BlogCard>
)

export default BCard
