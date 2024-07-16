import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import CategorySection from '../../components/CategorySection';
import VideoForm from '../../components/VideoForm';
import categoryColors from '../../assets/colors'; 
import './home.css'

Modal.setAppElement('#root'); // Necesario para accesibilidad

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [editingVideo, setEditingVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/videos')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este video?')) {
      fetch(`http://localhost:5000/videos/${id}`, {
        method: 'DELETE'
      }).then(() => {
        setVideos(videos.filter(video => video.id !== id));
        if (selectedVideo && selectedVideo.id === id) {
          setSelectedVideo(null);
        }
      });
    }
  };

  const handleEdit = (video) => {
    setEditingVideo(video);
    setIsModalOpen(true);
  };

  const handleSave = (updatedVideo) => {
    if (updatedVideo.id) {
      fetch(`http://localhost:5000/videos/${updatedVideo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedVideo)
      }).then(() => {
        setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
        setEditingVideo(null);
        setIsModalOpen(false);
      });
    } else {
      fetch('http://localhost:5000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedVideo)
      }).then(response => response.json())
        .then(newVideo => {
          setVideos([...videos, newVideo]);
          setEditingVideo(null);
          setIsModalOpen(false);
        });
    }
  };

  const handleClear = () => {
    setEditingVideo(null);
  };

  const handleSelect = (video) => {
    setSelectedVideo(video);
  };

  const categories = ['front-end', 'back-end', 'innovacion'];

  return (
    <div>
      <Header />
      <Banner video={selectedVideo} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
      >
        <button className="close-button" onClick={() => setIsModalOpen(false)}>&times;</button>
        <VideoForm video={editingVideo} onSave={handleSave} onClear={handleClear} />
      </Modal>
      {categories.map(category => (
        <CategorySection
          key={category}
          category={category}
          videos={videos.filter(video => video.category.toLowerCase() === category)}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSelect={handleSelect}
          color={categoryColors[category]}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Home;