import React, { Component } from 'react'

import { connect } from 'react-redux'

import { candidateuPortId, contributorId, contribute } from '../../../util/connectors'
var mnid = require('mnid')
//import Upload from '../profile/Upload'

class Donor extends Component {

  constructor(props){
    super(props)

    // this.state = {
    //   numCandidate: 3,
    //   candidates: ["Candidate1","Candidate2","Candidate3"],
    //   selectedCandidate: "Candidate1",
    //   transactionHash: null
    // }
  }

  submit(){
  var contributorId = "2ovWjYMPu6mBFBJ3nTZZT7dT38SRuiW6umh"
    contribute(contributorId)
     contribute(contributorId,
       transactionHash => {
      this.setState({
        transactionHash: transactionHash
      })
    })
  }

  componentDidMount(){
     this.state.selectedCandidate("Candidate1");
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
                <div style={{ marginTop: 16 }}>
                  {

                    <div className="card">
                      <div className="card-header">
                        <h2 className="card-title">Campaign Fund Registration</h2>
                      </div>

                      <div className="card-body">
                        <label>Name</label>
                        <input type="text" value={ "Candidate1" } className="form-control" />
                        <label>Party</label>
                        <input type="text" value={"Independent"} className="form-control" />
                        <label>Address</label>
                        <input type="text" value={"Address"} className="form-control" />
                        <button onClick={ this.submit.bind(this) } disabled={ false } className="btn btn-sm btn-success">Register Now</button>
                        {
                          this.state.transactionHash ?
                          <p><a target="__blank" href={`https://rinkeby.etherscan.io/tx/${this.state.transactionHash}`}>Click here</a> to view this transaction on the Ethereum blockchain.</p>
                          : null
                        }
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

 export default connect(mapStateToProps)(Donor)
