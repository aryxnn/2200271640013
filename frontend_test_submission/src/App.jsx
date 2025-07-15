import React, { useState } from 'react';
import UrlForm from './UrlForm';
import ShortenedList from './ShortenedList';
import './App.css';

function App() {
  const [urls, setUrls] = useState([
    { longUrl: '', validity: 30, shortcode: '' }
  ]);
  const [shortened, setShortened] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const addUrl = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: 30, shortcode: '' }]);
    }
  };


  const isValidUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  };

  const generateShortcode = () => {
    return Math.random().toString(36).substring(2, 8);
  };

  const shortenUrls = () => {
    for (let entry of urls) {
      if (!entry.longUrl || !isValidUrl(entry.longUrl)) {
        alert("Invalid URL: " + entry.longUrl);
        return;
      }
    }

    const newList = urls.map((entry) => {
      const sc = entry.shortcode || generateShortcode();
      const creationTime = new Date();
      const expiry = new Date(creationTime.getTime() + entry.validity * 60000);
      return {
        ...entry,
        shortcode: sc,
        creationTime: creationTime.toISOString(),
        expiry: expiry.toISOString(),
        clicks: [],
      };
    });

    setShortened([...shortened, ...newList]);
    setUrls([{ longUrl: '', validity: 30, shortcode: '' }]);
  };

  const registerClick = (index) => {
    const updated = [...shortened];
    updated[index].clicks.push({
      timestamp: new Date().toISOString(),
      source: document.referrer || "direct",
      location: "Simulated: Delhi, India", 
    });
    setShortened(updated);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">React URL Shortener</h3>
      <UrlForm
        urls={urls}
        handleChange={handleChange}
        addUrl={addUrl}
        shortenUrls={shortenUrls}
      />
      <hr />
      <ShortenedList shortened={shortened} registerClick={registerClick} />
    </div>
  );
}

export default App;
