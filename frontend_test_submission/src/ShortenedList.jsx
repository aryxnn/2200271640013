import React from 'react';

const ShortenedList = ({ shortened, registerClick }) => {
  return (
    <div>
      <h5 className="mt-4">Shortened URLs</h5>
      {shortened.map((item, index) => (
        <div key={index} className="list-group-item my-3 p-3 border rounded">
          <div>
  <strong>Shortened URL:</strong>{' '}
  <a
    href={item.longUrl}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => {
      e.preventDefault();            
      registerClick(index);         
      window.open(item.longUrl);    
    }}
  >
    {item.shortcode}
  </a>
</div>

          <div><strong>Original URL:</strong> {item.longUrl}</div>
          <div><strong>Created at:</strong> {new Date(item.creationTime).toLocaleString()}</div>
          <div><strong>Expires at:</strong> {new Date(item.expiry).toLocaleString()}</div>
          <div><strong>Total Clicks:</strong> {item.clicks.length}</div>

          {item.clicks.length > 0 && (
            <div className="mt-3">
              <h6>Click Details:</h6>
              <ul className="list-group">
                {item.clicks.map((click, i) => (
                  <li key={i} className="list-group-item">
                    <div><strong>Time:</strong> {new Date(click.timestamp).toLocaleString()}</div>
                    <div><strong>Source:</strong> {click.source}</div>
                    <div><strong>Location:</strong> {click.location}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShortenedList;
