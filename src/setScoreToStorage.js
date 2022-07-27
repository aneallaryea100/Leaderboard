export default function setScoreToStorage(score) {
  localStorage.setItem('scores', JSON.stringify(score));
}