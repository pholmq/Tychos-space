import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
   <Layout>
     <p>Now go build something great.</p>
  <a href="ts">Tychosium 3D</a>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  //   <Link to="/page-2/">Go to page 2</Link>
   </Layout>
  
)

export default IndexPage
