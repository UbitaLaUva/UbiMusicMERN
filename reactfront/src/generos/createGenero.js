import axios from 'axios';
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';

const URI = 'http://localhost:8000/generosMusica/'

const CompCreateGenero = () => {
    const [tipo_Gnero_Cancion, setTitle] = useState('')
    const navigate = useNavigate()

    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { tipo_Gnero_Cancion: tipo_Gnero_Cancion })
        navigate('/')
    }

    return (
        <div>
            <h3> Registrar Genero Musica</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'> Nombre Genero</label>
                    <input value={tipo_Gnero_Cancion} onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className='form-control'
                    />

                </div>
                <button type='submit' className='btn btn-primary'>Registrar</button>


            </form>
        </div>
    )
}

export default CompCreateGenero