import React from 'react';
import "./videocard.css"
import categoryColors from '../../assets/colors'; 
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";

const VideoCard = ({ video, onDelete, onEdit, onSelect }) => {
  const color = categoryColors[video.category.toLowerCase()];

  const cardStyle = {
    boxShadow: `0px 0px 17px 8px ${color} inset`,
    
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // Evita que se active el evento onSelect del div contenedor
    window.open(video.link, '_blank');
  };

  return (
    <div className="video-card" style={cardStyle} onClick={() => onSelect(video)}>
      <div className="seccion_imagen" ><img src={video.photo} alt={video.title} onClick={handleImageClick} /></div>
      
      <div className="seccion_botones">
      <p onClick={(e) => { e.stopPropagation(); onDelete(video.id); }} className="boton_card"> <MdDeleteForever /> Borrar</p>
      <p onClick={(e) => { e.stopPropagation(); onEdit(video); }} className="boton_card" ><RiEdit2Line /> Editar</p>
      </div>
      
    </div>
  );
};

export default VideoCard;



