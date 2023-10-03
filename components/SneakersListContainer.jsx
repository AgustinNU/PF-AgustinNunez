import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sneakersData } from '../services/mockData';
import SneakerCard from './SneakerCard';

function SneakersListContainer() {
    const { id } = useParams();
    console.log(id);
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const obtenerSneakersPorCategoria = async (categoriaId) => {
            const filteredSneakers = sneakersData.filter(sneaker => sneaker.categoria === categoriaId);
            setSneakers(filteredSneakers);
        };

        if (id) {
            obtenerSneakersPorCategoria(id);
        } else {
            setSneakers(sneakersData);
        }
    }, [id]);

    if (sneakers.length === 0) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1 className='titulo'>Lista de Sneakers</h1>
            <div className="sneaker-card-container">
            {sneakers.map(sneaker => (
                <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
        </div>
        </div>
    );
}

export default SneakersListContainer;