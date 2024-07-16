import React, { useState, useEffect } from 'react';


const VideoForm = ({ video, onSave, onClear }) => {
  const initialState = {
    id: null,
    title: '',
    category: 'front-end',
    photo: '',
    link: '',
    description: ''
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (video) {
      setFormData({
        id: video.id || null,
        title: video.title || '',
        category: video.category || 'front-end',
        photo: video.photo || '',
        link: video.link || '',
        description: video.description || ''
      });
    } else {
      setFormData(initialState);
    }
  }, [video]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };

  const handleClear = () => {
    setFormData(initialState);
    if (onClear) onClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="title" 
        value={formData.title || ''} 
        onChange={handleChange} 
        placeholder="Titulo" 
      />
      <select 
        name="category" 
        value={formData.category || 'front-end'} 
        onChange={handleChange}
      >
        <option value="front-end">Front-end</option>
        <option value="back-end">Back-end</option>
        <option value="innovacion">Innovación</option>
        
      </select>
      <input 
        name="photo" 
        value={formData.photo || ''} 
        onChange={handleChange} 
        placeholder="URL de la imagen" 
      />
      <input 
        name="link" 
        value={formData.link || ''} 
        onChange={handleChange} 
        placeholder="URL del video" 
      />
      <textarea 
        name="description" 
        value={formData.description || ''} 
        onChange={handleChange} 
        placeholder="Descripción"
      ></textarea>
      <div className="button-group">
      <button type="submit">Guardar</button>
      <button type="button" onClick={handleClear}>Limpiar</button>
      </div>
    </form>
  );
};

export default VideoForm;
