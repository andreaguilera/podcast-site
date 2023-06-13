import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPodcastEpisodes } from '../services/spotify'

const HomeContainer = styled.div`
  header {
    background-color: #f2f2f2;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 24px;
    margin: 0;
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 16px;
  }

  nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  main {
    padding: 16px;
    text-align: center;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 16px;
  }

  .featured-episode {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
  }

  .featured-episode img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  .featured-episode h2 {
    font-size: 24px;
    margin: 0;
  }

  footer {
    padding: 16px;
    background-color: #f2f2f2;
    text-align: center;
  }

  .episode-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin-top: 32px;
  }

  .episode-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .episode-item img {
    width: 70%;
    height: auto;
    border-radius: 4px;
    margin-top: 10px;
  }

  .episode-item h3 {
    margin-top: 8px;
    font-size: 16px;
    text-align: center;
  }
`;

const Home: React.FC = () => {
  const [episodes, setEpisodes] = useState<any[]>([]);

  useEffect(() => {
    async function fetchEpisodes() {
      const fetchedEpisodes = await getPodcastEpisodes();
      setEpisodes(fetchedEpisodes);
    }

    fetchEpisodes();
  }, []);

  return (
    <HomeContainer>     

      <main>
        <h2>Bem-vindo ao Podcast</h2>
        <p>Apresentamos os melhores episódios sobre diversos assuntos interessantes.</p>

        <div className="episode-container">
          {episodes.map((episode) => (
            <div className="episode-item" key={episode.id}>
              <a href={episode.external_urls.spotify} target='_blank'>
              <img src={episode.images[0].url} alt={episode.name} />
              </a>
              <h3>{episode.name}</h3>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <p>&copy; 2023 Podcast. Todos os direitos reservados.</p>
      </footer>
    </HomeContainer>
  );
}

export default Home;
