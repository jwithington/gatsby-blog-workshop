import { Link } from "gatsby"
import React from 'react'
import Layout from "../components/layout"

const AboutPage = () => (
  <main>
    <Layout>
      <p>
        <Link to='/'>
          Go Home
        </Link>
      </p>
    </Layout>
  </main>
)

export default AboutPage
