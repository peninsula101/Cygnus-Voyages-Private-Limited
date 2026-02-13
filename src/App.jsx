import React, { useState } from 'react';
import { jobs } from './data/jobs'; 
import JobCard from './components/JobCard'; 
import './App.css'; 

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");


const displayedJobs = jobs.filter(job => {
  const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesLocation = locationFilter === "All" || job.location === locationFilter;
  const matchesType = typeFilter === "All" || job.type === typeFilter;

  return matchesSearch && matchesLocation && matchesType;
})
.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="app-container">
      <header>
        <h1>Job Board</h1>
        <input 
          type="text" 
          placeholder="Search by job title..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filters">
          <select onChange={(e) => setLocationFilter(e.target.value)} value={locationFilter}>
            <option value="All">All Locations</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
          </select>

          <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
            <option value="All">All Types</option>
            <option value="Internship">Internship</option>
            <option value="Full-time">Full-time</option>
          </select>
        </div>
      </header>

      <div className="job-list">
        {displayedJobs.length > 0 ? (
          displayedJobs.map(job => (
          <JobCard key={job.id} job={job} searchTerm={searchTerm} />
          ))
        ) : (
          <p>No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
}

export default App;