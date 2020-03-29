import React from "react"

import { SEO } from "../components/SEO"
import Layout from "../components/Layout"
import { Characters } from "../components/Characters"

export const Index = () => (
  <Layout>
    <SEO />
    <Characters />
  </Layout>
)

export default Index
