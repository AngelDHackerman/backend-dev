// The Jikan API (https://jikan.moe/) is a public API that allows you to fetch information about various anime and manga.
// Write an asynchronous TypeScript function that takes an anime ID as input and returns the title of the anime and the synopsis.
// The function should properly handle errors and cases where the anime ID does not exist.

import fetch from 'node-fetch';

const getAnimeInfo =async (animeID: number) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeID}`)
    // Verify if the answer is correct
    if (!response.ok) { 
      throw new Error('Anime ID not found!')
    }

    const result = await response.json()
    const data = result.data  // From the API we received an object called "data" which contains all the information needed.

    return { 
      title: data.title,
      synopsys: data.synopsis
    }
  } catch (error) {
    console.error(error); 
    throw new Error('Failed to fetch anime')
  }
}

// Getting the information for the API: 

getAnimeInfo(5)
  .then(anime => console.log(anime))
  .catch(error => console.error(error))