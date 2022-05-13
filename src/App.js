import { useEffect, useState } from 'react';
import './App.css'
import VoterLogin from './VoterLogin'
import Web3 from 'web3';


const App = () => {


  const [admin,setAdmin] = useState("")
  //const [loader,setLoader] = useState(true)
  //const [election,setElection] = useState()

  useEffect(() => {
    loadweb3();
    LoadBlockchainData();
});

  const loadweb3 = async () => {
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      await window.eth_requestAccounts;
    }
    else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert(
        "Install metamask in order to proceed."
      )
    }
  }

  const LoadBlockchainData = async () => {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
    setAdmin(accounts[0])
    console.log(admin)

  }

  return (
    <div className='App'>
      <VoterLogin />
      
    </div>
  )

}

export default App;