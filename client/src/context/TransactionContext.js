import React, {useEffect , useState} from 'react';
import { ethers } from "ethers";
import {contractABI,contractAddress} from '../utils/constants';

export const TransactionContext=React.createContext();

const { ethereum } = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
  
    return transactionContract;

  };

export const TransactionProvider = ({children}) =>{
const [currentAccount, setCurrentAccount] = useState("");
const [formData,setFormData]=useState({address:' ',amount:' ',keyword:' ',message:' '});
const[isLoading,setIsLoading]=useState(false);
const [TransactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
const handleChange = (e, name) => {
  setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
};

const checkwallet = async() => {
  try{
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
      setCurrentAccount(accounts[0]);
      //getAllYtansaction();
      } else {
        console.log("No accounts found");
      }
        console.log(accounts);
      } catch (error) {
        console.log(error);
      }
      
}

  const connectWallet = async () => {
    try {
        if (!ethereum) return alert("Please install MetaMask.");
  
        const accounts = await ethereum.request({ method: "eth_requestAccounts", });
        
        setCurrentAccount(accounts[0]);
        window.location.reload();
      } catch (error) {
        console.log(error);
  
        throw new Error("No ethereum object");
      }
  }
 
  // const sendTransaction = async () => {
  //     try {
  //       if (!ethereum) return alert("Please install MetaMask.");
  //       //get the data from the form...
  //       const{addressTo,amount,keyword,message}=formData;
  //      const transactionContract = getEthereumContract();
  //      const parsedAmount=ethers.utils.parseEther(amount);
  //      await ethereum.request({
  //        method:'eth_sendTransaction',
  //        params:[{
  //          from:currentAccount,
  //          to: addressTo,
  //          gas: "0x5208", //2100 gwei
  //          value: parsedAmount._hex, //0.0001
  //        }]
  //      });

  //     const transactionHash= await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);

  //     setIsLoading(true);
  //     console.log(`loading - ${transactionHash.hash}`);
  //     await transactionHash.wait();
  //     setIsLoading(false);
  //     console.log(`Success - ${transactionHash.hash}`);
      
  //     const transactioncount = await transactionContract.getTransactionCount();

  //     setTransactiionCount(transactionCount.toNumber());
  //     } catch (error) {
          
  //       console.log(error);
  //       throw new Error("No ethereum object");
          
  //     }
  // }

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        const { addressTo, amount, keyword, message } = formData;
        const transactionsContract = getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas: "0x5208",
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionsContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const TransactionCount = await transactionsContract.getTransactionCount();

        setTransactionCount(TransactionCount.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkwallet();
  }, [TransactionCount]);

    return(
    <TransactionContext.Provider value={{ connectWallet,currentAccount,formData,setFormData,handleChange,sendTransaction,isLoading}}>
    {children}
    </TransactionContext.Provider>
);
};