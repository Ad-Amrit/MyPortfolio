import React, { useEffect, useState } from 'react';
import '../styles/Posts.css';

const Posts = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Added state for error handling

  const API = "https://api.spacexdata.com/v5/launches/latest";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      if(!res.ok){
        throw Error(`Faied to fetch data. Status= ${res.ststus}`)
      }
      const data = await res.json();
      setNews(data); // Assuming data directly contains launch information
    } catch (error) {
      console.error(error);
      setError(error.message); // Set error message for display
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div className='Posts'>
      <h1>SpaceX News</h1>
      {isLoading ? (
        <p className='Loading'>Loading SpaceX news...</p>
      ) : error ? (
        <p className='Error'>Error fetching news: {error}</p>
      ) : (
        <ul className='News'>
          {news.map((launch) => (
            <li key={launch.id}> {/* Assuming 'id' exists for uniqueness */}
              <h3>{launch.name}</h3>
              <p>{launch.details}</p>
              {launch.links?.webcast && ( // Check if webcast URL exists
                <a
                  href={launch.links.webcast}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Launch
                </a>
              )}
            </li>
          ))}
          {/* Added empty message if news array is empty */}
          {news.length === 0 && <p>No recent launches found.</p>}
        </ul>
      )}
    </div>
  );
};

export default Posts;
