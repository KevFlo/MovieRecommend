import { useState } from 'react';
import './App.css';
import Search from './app/search/search';
import Dashboard from './app/dashboard/dashboard';
import Media from './app/media/media';
import Nav from './app/nav/nav';
import { Routes, Route } from "react-router-dom";

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <div className='app-wrapper'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/search" element={<Search query={searchQuery} setQuery={setSearchQuery} />} />
          <Route path="/tv/:id" element={<Media />} />
          <Route path="/movie/:id" element={<Media />} />
        </Routes>
      </div>
      <Nav />
    </div>
  );
}

export default App;
