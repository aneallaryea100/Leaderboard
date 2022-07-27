import getScoreFromStorage from './getScoreFromStorage.js';
import setScoreToStorage from './setScoreToStorage.js';

export default function addScoresToStorage(name, scorez) {
  const recieveScores = getScoreFromStorage();
  recieveScores.push({
    name,
    scores: scorez,
    index: recieveScores.length + 1,
  });
  setScoreToStorage(recieveScores);
}