import {useState} from 'react'

function TransactionForm (data){
  const [formData , setFormData] = useState (data)

  function handlechange (e){
    setFormData ({...formData , [e.target.name]: e.target.value})

  }
  return (
    <div>
      <form>
        <input type = "date" name = "date" placeholder = "date"/>
        <input type = "text" name = "description" placeholder = "description"/>
        <input type = "text" name = "category" placeholder = "category"/>
        <input type = "number" name = "amount" placeholder = "amount"/>
        <button>PRESS</button>
      </form>
    </div>
  )
}

export default TransactionForm