/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import { displayEpisodes } from './displayItems.js';


const episodes = ' https://api.tvmaze.com/seasons/1/episodes';

async function getEpisodes() {
  const response = await fetch(episodes);
  const data = await response.json();
  displayEpisodes(data);
}


export { getEpisodes };