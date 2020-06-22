import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/3331cb3f-7aff-495f-802e-6f1613412e36">Go To Profile</Link>
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
