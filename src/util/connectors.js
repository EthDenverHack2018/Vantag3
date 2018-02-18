import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Vantag3', {
     clientId: '2ox3yhAnwM7eahsdNwvovanM1xzRggp9gQi',
     network: 'rinkeby',
     signer: SimpleSigner('c33b126055d33a58a3a6e57790362417e585b8a7865c0ec9a93aa7f936e65442')
   })
export const web3 = uport.getWeb3()

import ABI from './contract_abi.json'

export const DEPLOYED_ADDRESS = '0x9346e8a0c76825cd95bc3679ab83882fd66448ab'

// var FundContract = web3.eth.contract(ABI);
// var fundContractInstance = FundContract.at( DEPLOYED_ADDRESS );
// var candidateuPortId = fundContractInstance.candidateuPortId(web3.eth.getCoinbase());
// var contributorId = "2ovWjYMPu6mBFBJ3nTZZT7dT38SRuiW6umh"
//
// export const contribute = ({
//   contributorId
//   }, callback ) => {
// var contribution = fundContractInstance.contribute(contributorId (e,r) => {
//   callback( r )
//  })

  // var transaction = healthcareInstance.addRecord( candidatePublicKey, donorPublicKey, dataHash, dataFileReference, (e,r) => {
  //
  //   callback( r )
  // })

// export const getDoctorAtIndex = ( index, callback ) => {
//   var HealthcareContract = web3.eth.contract(ABI);
//   var healthcareInstance = HealthcareContract.at( DEPLOYED_ADDRESS );
//
//   var doctors = healthcareInstance.getRecordAtIndex.call( index, function(e, r){
//
//     callback(r)
//   } )
//
// }

export const contribute = ( contributorId, callback ) => {
  var FundContract = web3.eth.contract(ABI);
  var fundContractInstance = FundContract.at( DEPLOYED_ADDRESS );
  var candidateuPortId = fundContractInstance.candidateuPortId(web3.eth.getCoinbase());
  var contributorId = "2ovWjYMPu6mBFBJ3nTZZT7dT38SRuiW6umh"
  fundContractInstance.contribute(contributorId, function (e,r) {
    callback(r)
  })
}

// export const getPatientCountForDoctor = ( doctorAddress, callback ) => {
//   var HealthcareContract = web3.eth.contract(ABI);
//   var healthcareInstance = HealthcareContract.at( DEPLOYED_ADDRESS );
//
//   var patientCount = healthcareInstance.getPatientCount( doctorAddress, function(e, r){
//
//     console.log("getPatientCount", e, r);
//   })
//
// }
