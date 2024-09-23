import React, { useState } from 'react'
import './Add.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Add() {
    const [inputData, setInputData] = useState({nom:'',prenom:'',adresse:'',numtel:'',email:'',paiment:'',montant:''})

    const navigate = useNavigate();

    function handleSubmit(event) { 
        event.preventDefault()

        axios.post('http://localhost:3030/users', inputData)
        .then(res => {
            alert("data added successfully ");
            navigate('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='d-flex w-100 vh-100 justify-centent-center align-items-center' >
    <div className='w-50 border bg-light p-5'>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">nom :</label>
            <input type="text" name='nom' className='from-control'
            onChange={e=>setInputData({...inputData, nom: e.target.value})} />
        </div><br />
        <div>
            <label htmlFor="name">prenom :</label>
            <input type="text" name='prenom' className='from-control'
            onChange={e=>setInputData({...inputData, prenom: e.target.value})} />
        </div><br />
        <div>
            <label htmlFor="name">adresse :</label>
            <input type="text" name='adresse' className='from-control'
            onChange={e=>setInputData({...inputData, adresse: e.target.value})} />
        </div><br />
        <div>
            <label htmlFor="name">numtel :</label>
            <input type="text" name='numtel' className='from-control'
            onChange={e=>setInputData({...inputData, numtel: e.target.value})} />
        </div><br />
        
        <div>
            <label htmlFor="email">email :</label>
            <input type="email" name='email' className='from-control' 
            onChange={e=>setInputData({...inputData, email: e.target.value})} />
        </div><br />
        <div>
            <label htmlFor="name">paiment :</label>
            <input type="date" name='paiment' className='from-control'
            onChange={e=>setInputData({...inputData, paiment: e.target.value})} />
        </div><br />
        <div>
            <label htmlFor="name">montant :</label>
            <input type="text" name='montant' className='from-control'
            onChange={e=>setInputData({...inputData, montant: e.target.value})} />
        </div><br />
        <div>
            <label htmlFor="name">mat_fiscale :</label>
            <input type="text" name='mat_fiscale' className='from-control' 
            onChange={e=>setInputData({...inputData, mat_fiscale: e.target.value})} />
        </div><br />

        <div>
            <label htmlFor="name">mat_CNSS :</label>
            <input type="text" name='mat_CNSS' className='from-control' 
            onChange={e=>setInputData({...inputData, mat_CNSS: e.target.value})} />
        </div><br />
        <button className='btn btn-info'>submit</button>
        </form>
        </div>       
    </div>
      
    
  )
}

export default Add
