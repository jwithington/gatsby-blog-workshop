import { Link } from "gatsby"
import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <p>Hi there it's Jim</p>
      <Link to='/about'>
        Go to the About Page
      </Link>
    </main>
  )
}

export default IndexPage
