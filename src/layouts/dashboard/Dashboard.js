import React, { Component } from 'react'

import { connect } from 'react-redux'

import Donor from '../../user/layouts/donor/donor.js'
import Report from '../../user/layouts/report/report.js'

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <br/>
            <h1>{this.props.role === 'donor' ? 'Donor' : 'Reports ' } Dashboard</h1>
            {
              this.props.role === "donor" ? <Donor /> : <Report />
            }
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  role: state.user.role
})

export default connect(mapStateToProps)(Dashboard)
