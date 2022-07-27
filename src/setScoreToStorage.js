export const setScoreToStorage = (score) => {
    localStorage.setItem('scores', JSON.stringify(score));
};