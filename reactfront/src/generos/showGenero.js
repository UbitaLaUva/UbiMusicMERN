import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const URI = 'http://localhost:8000/generosMusica/'


const CompShowGenero = () => {
    const [generos, setGenero] = useState([])
    useEffect(() => {
        getGeneros()
    }, [])

    //procedimiento para mostrar todos os blogs
    const getGeneros = async () => {
        const res = await axios.get(URI)
        setGenero(res.data)

    }

    //procedimiento para eliminar

    const deleteGenero = async (id) => {
        await axios.delete(`${URI}${id}`)
        getGeneros()

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'> <i className="fa-solid fa-circle-plus"> Crear Genero </i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre Genero</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {generos.map((genero) => (
                                <tr key={genero.id}>
                                    <td>{genero.tipo_Gnero_Cancion}</td>
                                    <td>
                                        <Link to={`/edit/${genero.id}`} className='btn btn-info'><i className="fa-solid fa-pencil"> </i></Link>
                                        <button onClick={() => deleteGenero(genero.id)} className='btn btn-danger'><i className="fa-solid fa-trash-can"> </i></button>
                                    </td>

                                </tr>
                            )

                            )}

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}

export default CompShowGenero