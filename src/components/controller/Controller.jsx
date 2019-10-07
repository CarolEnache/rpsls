import React from 'react';

import iconsList from '../../Icons/';

function Controller() {
  return (
    <div className="Controller">
      <section className="controller-section">
        {iconsList.map(icon => (
          <button>
            <img src={icon} alt='icon'/>
          </button>
        ))}
      </section>
    </div>
  );
}

export default Controller;
