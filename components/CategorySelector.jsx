import { Link } from 'react-router-dom';

function CategorySelector() {
    return (
        <div>
            <h1 className='titulo'>Selecciona una Categoría</h1>
            <ul className='categoryClass'>
                <li>
                    <Link to="/category/nike">Nike</Link>
                </li>
                <li>
                    <Link to="/category/adidas">Adidas</Link>
                </li>
            </ul>
        </div>
    );
}

export default CategorySelector;