import React from 'react';

const UrlForm = ({ urls, handleChange, addUrl, shortenUrls }) => {
  return (
    <>
      {urls.map((entry, index) => (
        <div className="mb-3" key={index}>
          <input
            type="text"
            placeholder="Enter Long URL"
            className="form-control mb-2"
            value={entry.longUrl}
            onChange={(e) => handleChange(index, 'longUrl', e.target.value)}
          />
          <input
            type="number"
            placeholder="Validity in minutes"
            className="form-control mb-2"
            value={entry.validity}
            onChange={(e) => handleChange(index, 'validity', e.target.value)}
          />
          <input
            type="text"
            placeholder="Custom shortcode (optional)"
            className="form-control"
            value={entry.shortcode}
            onChange={(e) => handleChange(index, 'shortcode', e.target.value)}
          />
        </div>
      ))}
      <button className="btn btn-secondary me-2" onClick={addUrl}>Add URL</button>
      <button className="btn btn-primary" onClick={shortenUrls}>Shorten URLs</button>
    </>
  );
};

export default UrlForm;
