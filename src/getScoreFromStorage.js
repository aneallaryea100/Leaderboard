export default function getScoreFromStorage() {
  const bb = JSON.parse(localStorage.getItem('scores')) || [];
  return bb;
}