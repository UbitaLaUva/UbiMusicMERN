import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/generosMusica/'

const CompEditGenero = () => {
    const [tipo_Gnero_Cancion, setTitle] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            tipo_Gnero_Cancion: tipo_Gnero_Cancion
        })
        navigate('/')
    }

    useEffect(() => {
        getGeneroById()
    }, [])

    const getGeneroById = async() =>{
       const res = await axios.get(URI+id)
       setTitle(res.data.tipo_Gnero_Cancion)
    }

    return(
        <div>
        <h3> Registrar Genero Musica</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'> Nombre Genero</label>
                <input value={tipo_Gnero_Cancion} onChange={(e) => setTitle(e.target.value)}
                type="text"
                className='form-control'
                />

            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>


        </form>
    </div>
    )
}



export default CompEditGenero