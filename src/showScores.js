import {getScoreFromStorage} from './getScoreFromStorage.js'
const listScores = document.querySelector('.list_scores');
export default function showScores(){
    const scoreFromStorage = getScoreFromStorage();
    listScores.innerHTML = '';
    scoreFromStorage.forEach((score) => {
        const div1 = document.createElement('div');
        div1.className = 'holdscores';
        const scoreLi = document.createElement('li');
        scoreLi.className = 'liScore';
        const pEl1 = document.createElement('p');
        pEl1.textContent = score.name;
        pEl1.className = 'names';
        const span = document.createElement('span');
        span.textContent = ': ';
        const pEl2 = document.createElement('p');
        pEl2.textContent = score.scores;
        pEl2.className = 'scoreNum';
        scoreLi.append(pEl1,span,pEl2);
        div1.appendChild(scoreLi);
        listScores.appendChild(div1);
    })
}