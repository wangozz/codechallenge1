import React , {useEffect , useState} from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import SearchBar from './SearchBar';

function App (){
  const [accountData , setAccountData] = useState ([])

  useEffect (() =>{
    fetch ("http://localhost:3000/transactions")
    .then((response) => response.json ())
    .then((data) => {
      setAccountData (data)
    })
  } , [])
  return (
    <div>
      <SearchBar />
      <TransactionForm data = {accountData}/>
      <TransactionList data = {accountData}/>
      
    </div>
  )
}

export default App