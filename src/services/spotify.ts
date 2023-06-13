import axios from 'axios';

const CLIENT_ID = '827f527eb7b3434a9ab7fbc5200f6e67';
const CLIENT_SECRET = '456a49c67e274340b9d42837ec59e637';

async function getAccessToken() {
  const credentials = `${CLIENT_ID}:${CLIENT_SECRET}`;
  const encodedCredentials = btoa(credentials);

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedCredentials}`,
      },
    }
  );

  return response.data.access_token;
}

export async function getPodcastEpisodes() {
  const accessToken = await getAccessToken();

  const response = await axios.get('https://api.spotify.com/v1/shows/2B5mzBnkP0M8uTNtHMwyJu/episodes?market=US', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data.items;
}
