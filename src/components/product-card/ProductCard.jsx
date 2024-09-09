import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { faCartShopping, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';

export default function ProductCard({ prod }) {
  return (
    <article className='product-card'>
        <header className="card-header">
            <img  src={prod.image} 
                  alt={prod.name} 
                  className="product-image" />
        </header>
        <main className="card-body">
            <div className="product-category">
                {prod.category}
            </div>
            <h1 className="product-title">
              {prod.name}
            </h1>
            <p className="product-description">
                {prod.description}
            </p>
            <div className="product-info">
                <div className="product-price">
                    $ <span className="price">{prod.price}</span>
                </div>
            </div>
        </main>
        <footer className="card-footer">

            <button className="product-btn">
                <FontAwesomeIcon icon={faCartShopping} />
            </button>

            <NavLink to={`/product-detail/${prod.id}`} className="product-btn">

                <FontAwesomeIcon icon={faUpRightFromSquare} />
                
            </NavLink>

        </footer>
    </article>

  )
}
