// import './styles.css';
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';
import { getEpisodes } from './apiclass.js';
import {init} from './likes.js';
window.onload = getEpisodes();
init();

const comments = document.getElementsByClassName('comments');

// comments.addEventListener('click', () => {
//     const overlay = document.getElementById('overlay');
//     overlay.style.display = 'flex';
// });

// const closeBtn = document.getElementById('close-overlay');

// closeBtn.addEventListener('click', () => {
//     overlay.style.display = 'none';
// });