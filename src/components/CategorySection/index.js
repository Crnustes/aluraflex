import React from 'react';
import VideoCard from '../VideoCard';
import "./section.css"

const CategorySection = ({ category, videos, onDelete, onEdit }) => {
  const colors = {
    "front-end": "#6BD1FF",
    "back-end": "#00C86F",
    "innovacion": "#FFBA05"
  };

  return (
    <div className="category-section" style={{ borderColor: colors[category] }}>
      <div className="titulo_categoria">
        <h2 style={{ background: colors[category] }}>{category}</h2>
      </div>
      
      <div className="videos">
        {videos.map(video => (
          <VideoCard key={video.id} video={video} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
