import React, { useState } from 'react';
import '../styles/AnimalCard.css';

function AnimalCard({ animal }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="animal-card">
      <div className="card-image-container">
        <img 
          src={animal.image} 
          alt={animal.name}
          className="animal-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300?text=' + animal.name;
          }}
        />
        
        <div className="overlay"></div>
        
        <div className="description-wrapper">
          <h2 className="overlay-title">{animal.name}</h2>
          <p className="animal-description">
            {animal.description}
          </p>
        </div>
        
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          title={isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        >
          ♥
        </button>
      </div>
      
      <div className="card-content">
        <h2 className="animal-name">{animal.name}</h2>
      </div>
    </div>
  );
}

export default AnimalCard;
