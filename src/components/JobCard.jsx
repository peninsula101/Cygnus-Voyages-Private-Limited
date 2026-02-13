import React from 'react';

const JobCard = ({ job, searchTerm }) => {
  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
  };

  return (
    <div className="job-card">
      <h3>{getHighlightedText(job.title, searchTerm)}</h3> 
      <p className="company">{job.company}</p>
      <div className="details">
        <span>📍 {job.location}</span>
        <span className="badge">{job.type}</span>
      </div>
    </div>
  );
};

export default JobCard;