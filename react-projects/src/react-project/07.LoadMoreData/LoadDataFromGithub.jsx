import React, { useState, useEffect } from 'react';
import './loadGithub.css';

const LoadDataFromGithub = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch GitHub repositories
  const fetchRepos = async (pageNumber) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/repositories?since=${pageNumber * 30}`);
      const data = await response.json();
      if (data.length === 0) {
        setHasMore(false); // No more data to load
      } else {
        setRepos(prevRepos => [...prevRepos, ...data]);
      }
    } catch (error) {
      console.error('Error fetching repositories:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load more repositories when component mounts or page changes
  useEffect(() => {
    fetchRepos(page);
  }, [page]);

  // Function to handle "Load More" button click
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      {hasMore && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
};

export default LoadDataFromGithub;
