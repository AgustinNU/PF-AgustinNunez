import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase';
import SneakerCard from './SneakerCard'; 
import { collection, getDocs, query, where } from '@firebase/firestore';

function SneakersListContainer() {
    const { id } = useParams();
    const [sneakers, setSneakers] = useState([]);


    useEffect(() => {
        const itemsRef = collection(db, "items");

        const obtenerSneakersPorCategoria = async (categoriaId) => {
            const queryRef = query(itemsRef, where('categoryId', '==', categoriaId));

            const snapshot = await getDocs(queryRef);
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSneakers(items);
        };

        const obtenerTodosLosSneakers = async () => {
            const queryRef = query(itemsRef);
            const snapshot = await getDocs(queryRef);
            const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setSneakers(items);
        };

        if (id) {
            obtenerSneakersPorCategoria(id);
        } else {
            obtenerTodosLosSneakers();
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