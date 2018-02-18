import React, { Component } from 'react'

import { connect } from 'react-redux'

var mnid = require("mnid");

import { candidateuPortId, contributorId, contribute } from '../../../util/connectors'

class Report extends Component {

  constructor(props){
    super(props)

    this.state = {
      numCandidate: 3,
      candidates: ["Candidate1","Candidate2","Candidate3"],
      selectedCandidate: "Candidate1",
      transactionHash: null
    }
  }

  submit(){
  //  var contributorId = "2ovWjYMPu6mBFBJ3nTZZT7dT38SRuiW6umh"
    //contribute(contributorId)
    //  contribute(contributorId,
    //    transactionHash => {
    //   this.setState({
    //     transactionHash: transactionHash
    //   })
    // })
  }

  componentDidMount(){
     //selectCandidate("Candidate1");
  }

  selectCandidate(candidate){

    this.setState({
      selectedCandidate: candidate
    })
  }

  handleSignTransaction(){

    var networkDecoded = mnid.decode( this.props.user.address )

    var donorPublicKey = networkDecoded.address;
    var candidatePublicKey = this.state.selectedCandidate.key;
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            {
              <div>
                <br/>
                <div style={{ marginTop: 10 }}>
                  {
                    <div className="card">
                      <div className="card-header">
                      <h2 className="card-title">Campaign Fund Report</h2>
                      </div>

                      <div className="card-body">
                        <label>Name</label>
                        <input type="text" value={ "Candidate1" } className="form-control" />
                        <label>Party</label>
                        <input type="text" value={"Independent"} className="form-control" />
                        <label>Address</label>
                        <input type="text" value={"Address"} className="form-control" />
                        <label>FundValue</label>
                        <input type="text" value={"ETH 3000"} className="form-control" />
                      </div>
                    </div>
                  }
                </div>
              </div>
            }
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({

  user: state.user.data
})

export default connect(mapStateToProps)(Report)
