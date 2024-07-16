import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import VideoForm from '../../components/VideoForm';

const NewVideo = () => {
  const handleSave = (newVideo) => {
    fetch('http://localhost:5000/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newVideo)
    }).then(response => response.json())
      .then(() => {
        // Redireccionar a la página principal o mostrar un mensaje de éxito
      });
  };

  return (
    <div>
      <Header />
      <VideoForm onSave={handleSave} />
      <Footer />
    </div>
  );
};

export default NewVideo;
