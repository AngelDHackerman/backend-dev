// The Jikan API (https://jikan.moe/) is a public API that allows you to fetch information about various anime and manga.
// Write an asynchronous TypeScript function that takes an anime ID as input and returns the title of the anime and the synopsis.
// The function should properly handle errors and cases where the anime ID does not exist.

import fetch from 'node-fetch';

const getAnimeInfo =async (animeID: number) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v3/anime/${animeID}`)

    // Verify if the answer is correct
    if (!response.ok) { 
      throw new Error('Anime ID not found!')
    }

    const data = await response.json()  // convert the response in json format

    return { 
      title: data.title,
      synopsys: data.synopsis
    }
  } catch (error) {
    
  }
}