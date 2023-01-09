import React from 'react';
import './Card.css'
function picCard({img, text,link}) {
    return (
      <a href={link} target="_blank">
        <div className="pic-card">
          <img src={img} />
          <div className="caption">
            <h1>{text}</h1>
          </div>
        </div>
      </a>
    );
}

export default picCard;