import React, { Component } from 'react'

import { connect } from 'react-redux'

import Donor from '../../user/layouts/donor/donor.js'
import Candidate from '../../user/layouts/candidate/candidate.js'

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
            <h1>{this.props.role === 'donor' ? 'Donor' : 'Donor ' } Dashboard</h1>
            {
              this.props.role === "donor" ? <Donor /> : <Candidate />
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
