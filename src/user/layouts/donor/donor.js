import React, { Component } from 'react'

import { connect } from 'react-redux'

//import { Campaign } from '../../../../contracts/Campaign.sol';

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

    // createSignature({
    //   donorPublicKey,
    //   candidatePublicKey,
    //   dataHash: "fdsajkfdjslajlfdsakl",
    //   dataFileReference: this.state.fileReference,
    // }, (result) => {
    //
    //   this.setState({
    //     transactionHash: result
    //   })
    // })
  }

  render() {
    return (
  <div> //className="Donor">
    <h2>My Donation</h2>
    <p>Instantiated (deployed) Campaign Contract.</p>
    <dl>
      <dt>Candidate name</dt>
      <dd>{"Candidate1"}</dd>
      <dt>Candidate party</dt>
      <dd>{"Independent"}</dd>
      <dt>Donation</dt>
      <dd>{"1000"}</dd>
      <dt>Misc</dt>
      <dd>{"XYZ"}</dd>
    </dl>
  </div>
);
}
    // return (
    //   <div>
    //   <p>Select Candidate</p>
    //   <ul className="list-group">
    //   {
    //      this.state.candidates.map( (candidate, index) => (
    //       <li className="list-group-item" key={ candidate.key }>
    //         <a href="#" className="btn" onClick={ this.selectCandidate.bind(this, candidate) }>{ candidate.name } <span className="badge badge-secondary"> { candidate.party } </span></a>
    //       </li>
    //     ))
    //   }
    //   </ul>
    //   {
    //     this.state.selectedCandidate ?
    //     <div>
    //       <Upload doctor={ this.state.selectedCandidate } selectedCandidate={ this.state.selectedCandidate } successCallback={ fileReference => {
    //         this.setState({
    //           fileReference: fileReference.fileID
    //         })
    //       }} />
    //     </div>
    //     : null
    //   }
    //   {
    //     this.state.fileReference ?
    //     <div>
    //       <button className="btn btn-outline-primary" onClick={ this.handleSignTransaction.bind(this) }>Sign Transaction</button>
    //     </div>
    //     : null
    //   }
    //   {
    //     this.state.transactionHash ?
    //     <div>
    //       <h2>Signature Created</h2>
    //       <p><a target="__blank" href={`https://rinkeby.etherscan.io/tx/${this.state.transactionHash}`}>Click here</a> to view this transaction on the Ethereum blockchain.</p>
    //     </div>
    //     : null
    //   }
    // </div>
    // )
//  }
}

const mapStateToProps = state => ({
  user: state.user.data
})

 export default connect(mapStateToProps)(Donor)
