import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/3331cb3f-7aff-495f-802e-6f1613412e36">Go To Profile</Link>
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

Main.propTypes = {}

export default Main
