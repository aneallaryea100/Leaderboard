import './style.css';

// add events
const form = document.querySelector('.formact');
const addName = document.querySelector('#add_name');
const addScore = document.querySelector('#add_score');
const refresh = document.querySelector('.btn_refresh');
const listScores = document.querySelector('.list_scores');

// introduce the api

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1cfa2f50-0f4d-11ed-8754-19172f97de28/scores';

const addUserScores = () => {
  const addNameValue = addName.value;
  const addScoreValue = addScore.value;
  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      user: addNameValue,
      score: addScoreValue,
    }),
  });
};

const getUserScore = () => {
  fetch(url).then(async (resolve) => {
    const scoreData = await resolve.json();
    const resultsData = scoreData.result;
    return resultsData;
  })
    .then((resultsData) => {
      for (let i = 0; i < resultsData.length; i += 1) {
        const div1 = document.createElement('div');
        div1.className = 'holdscores';
        const li = document.createElement('li');
        li.className = 'liScore';
        const pEl = document.createElement('p');
        pEl.className = 'names';
        const span = document.createElement('span');
        span.textContent = ': ';
        const pEl2 = document.createElement('p');
        pEl2.className = 'scoreNum';
        pEl.textContent = resultsData[i].user;
        pEl2.textContent = resultsData[i].score;
        li.append(pEl, span, pEl2);
        div1.appendChild(li);
        listScores.appendChild(div1);
      }
    });
};

getUserScore();

// refresh button action
refresh.addEventListener('click', () => {
  listScores.innerHTML = '';
  getUserScore();
});

// form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addUserScores();
  form.reset();
});