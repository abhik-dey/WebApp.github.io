import React from 'react';
import './listView.css'; 

const ListView = ({ data }) => {
  return (
    <div className="listView-container">
      {data.map(item => (
        <div className="listView-item" key={item.id}>
          <div className="ring-image-wrapper">
            <img src={item.avatar} alt="Avatar" className='ring-image' />
            <span className="listView-item-id">{item.id}</span>
          </div>
          <span className="listView-item-firstName">{item.first_name}</span>
        </div>
      ))}
    </div>
  );
};

export default ListView;
