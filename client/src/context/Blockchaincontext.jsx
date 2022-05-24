import React, { useState } from 'react'
import { abi, contractAdress } from '../config.json'
import { ethers } from 'ethers'
import { useEffect } from 'react';

export const BlockchainContext = React.createContext();

export const BlockchainProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount,] = useState("");
  const [balance,setBalance] = useState();
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  

  const signer = provider.getSigner()

  const address = contractAdress;


  const contractAbi = abi;


  const contract = new ethers.Contract(address, contractAbi, signer);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert("Plase install Metamask");
      const accounts = await provider.send("eth_requestAccounts");
      console.log(accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error("No Ethereum Object")

    }
  }

  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum) return alert("Plase install Metamask");
      const accounts = await provider.send("eth_accounts");
      if (accounts.length) {
        setCurrentAccount(accounts[0])
      }
      else {
        console.log("No Accounts Found.")
      }
    } catch (error) {
      console.log(error)

    }
  }
  const getBalance = async () => {
    try {
        const contractBalance = await contract.balanceOf()
        setBalance(ethers.utils.formatEther(contractBalance))
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletConnected()
    getBalance()
  },[])

  return (


    <BlockchainContext.Provider
      value={{
        connectWallet,
        currentAccount
      }}>
      {children}
    </BlockchainContext.Provider>
  )
}