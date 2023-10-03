import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sneakersData } from '../services/mockData';

function SneakerDetailContainer() {
    const { id } = useParams();
    console.log(id);
    const [sneaker, setSneaker] = useState(null);

    useEffect(() => {
        const obtenerSneakerPorId = async (sneakerId) => {
            const foundSneaker = sneakersData.find(sneaker => sneaker.id.toString() === sneakerId);
            setSneaker(foundSneaker);
        };

        if (id) {
            obtenerSneakerPorId(id);
        }
    }, [id]);

    if (!sneaker) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{sneaker.nombre}</h1>
            <img src={`/img/${sneaker.imagen}`} alt={sneaker.nombre} className='imageDetail'/>
            <p>{sneaker.descripcion}</p>
            <p>Precio: {sneaker.precio}</p>
        </div>
    );
}

export default SneakerDetailContainer;