import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <img src={`${'https://cdn.braun.pgsitecore.com/-/media/images/braun_ca/home/homepage/carousel-new/braun_series-3_stage_mobile.jpg?v=1-201712080645'}`} />
    {/* <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script> */}
  </div>
)

export default IndexPage
