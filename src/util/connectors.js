import { Connect, SimpleSigner } from 'uport-connect'

export const uport = new Connect('Vantag3', {
     clientId: '2ox3yhAnwM7eahsdNwvovanM1xzRggp9gQi',
     network: 'rinkeby',
     signer: SimpleSigner('c33b126055d33a58a3a6e57790362417e585b8a7865c0ec9a93aa7f936e65442')
   })
export const web3 = uport.getWeb3()
