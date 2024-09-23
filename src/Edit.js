import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Edit.css';

function Edit() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3030/users/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:3030/users/${id}`, data)
            .then(res => {
                alert("Data updated successfully.");
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-light p-5'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="id">Id: </label>
                        <input type="text" name='id' value={data.id} className='form-control'
                            onChange={e => setData({ ...data, id: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="nom">Nom: </label>
                        <input type="text" name='nom' value={data.nom} className='form-control'
                            onChange={e => setData({ ...data, nom: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="prenom">Prenom: </label>
                        <input type="text" name='prenom' value={data.prenom} className='form-control'
                            onChange={e => setData({ ...data, prenom: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="adresse">Adresse: </label>
                        <input type="text" name='adresse' value={data.adresse} className='form-control'
                            onChange={e => setData({ ...data, adresse: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="numtel">Numtel: </label>
                        <input type="text" name='numtel' value={data.numtel} className='form-control'
                            onChange={e => setData({ ...data, numtel: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name='email' value={data.email} className='form-control'
                            onChange={e => setData({ ...data, email: e.target.value })} />
                    </div>

                    
                    <div>
                        <label htmlFor="paiment">date: </label>
                        <input type="date" name='paiment' value={data.paiment} className='form-control'
                            onChange={e => setData({ ...data, paiment: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="montant">Montant: </label>
                        <input type="text" name='montant' value={data.montant} className='form-control'
                            onChange={e => setData({ ...data, montant: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="mat_fiscale">mat_fiscale: </label>
                        <input type="text" name='mat_fiscale' value={data.mat_fiscale} className='form-control'
                            onChange={e => setData({ ...data, mat_fiscale: e.target.value })} />
                    </div>

                    <div>
                        <label htmlFor="mat_CNSS">mat_CNSS: </label>
                        <input type="text" name='mat_CNSS' value={data.mat_CNSS} className='form-control'
                            onChange={e => setData({ ...data, mat_CNSS: e.target.value })} />
                    </div>
                    <br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
