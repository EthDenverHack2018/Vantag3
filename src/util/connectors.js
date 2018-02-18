import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Vantag3', {
     clientId: '2ox3yhAnwM7eahsdNwvovanM1xzRggp9gQi',
     network: 'rinkeby',
     signer: SimpleSigner('c33b126055d33a58a3a6e57790362417e585b8a7865c0ec9a93aa7f936e65442')
   })
export const web3 = uport.getWeb3()

import ABI from './contract_abi.json'

export const DEPLOYED_ADDRESS = '0xd55d0c9c881d007b5bb7497a91a10f0ae7b9a1a2'

export const getDoctorCount = ( callback ) => {

  var HealthcareContract = web3.eth.contract(ABI);
  var healthcareInstance = HealthcareContract.at( DEPLOYED_ADDRESS );

  var doctorCount = healthcareInstance.numRecords( function(e, r){

    callback(  r.c[0] )
  } )
}

export const createSignature = ({
  donorPublicKey,
  candidatePublicKey,
  dataHash,
  dataFileReference
  }, callback ) => {

  var HealthcareContract = web3.eth.contract(ABI);
  var healthcareInstance = HealthcareContract.at( DEPLOYED_ADDRESS );

  var transaction = healthcareInstance.addRecord( candidatePublicKey, donorPublicKey, dataHash, dataFileReference, (e,r) => {

    callback( r )
  })
}

export const getDoctorAtIndex = ( index, callback ) => {
  var HealthcareContract = web3.eth.contract(ABI);
  var healthcareInstance = HealthcareContract.at( DEPLOYED_ADDRESS );

  var doctors = healthcareInstance.getRecordAtIndex.call( index, function(e, r){

    callback(r)
  } )

}

export const addProvider = ( options, callback ) => {

  var HealthcareContract = web3.eth.contract(ABI);
  var healthcareInstance = HealthcareContract.at( DEPLOYED_ADDRESS );

  healthcareInstance.register( options['address'], options['name'], options['specialty'], function(e, r){

    callback(r)
  })
}

export const getPatientCountForDoctor = ( doctorAddress, callback ) => {
  var HealthcareContract = web3.eth.contract(ABI);
  var healthcareInstance = HealthcareContract.at( DEPLOYED_ADDRESS );

  var patientCount = healthcareInstance.getPatientCount( doctorAddress, function(e, r){

    console.log("getPatientCount", e, r);
  })

}
