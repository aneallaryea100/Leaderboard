import _ from 'lodash';
import './style.css';
import showScores from './showScores.js';
import addScoresToStorage from './addScoresToStorage.js';

console.log('close friends');
showScores();

//add events
const addName = document.querySelector('#add_name');
const addScore = document.querySelector('#add_score');
const submitBtn = document.querySelector('.btn_submit');
submitBtn.addEventListener('click', (els) => {
  if(addName.value && addScore.value){
     els.preventDefault();
     addScoresToStorage(addName.value,addScore.value);
     addName.value = '';
     addScore.value = '';
     showScores();
  }
});