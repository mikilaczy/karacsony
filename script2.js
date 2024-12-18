const votes = {};
document.querySelectorAll('.card').forEach(card => {
    const title = card.querySelector('.card-title').textContent;
    votes[title] = 0;
    const button = card.querySelector('.btn-primary');
    button.addEventListener('click', () => vote(title));
});
function vote(title) {
    votes[title]++;
    updateResults();
}
function updateResults() {
    const resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML = '<h3>Szavazati eredmények:</h3>';
    for (const [title, count] of Object.entries(votes)) {
        resultsDiv.innerHTML += `<p>${title}: ${count} szavazat</p>`;
    }
}
const resultsSection = document.createElement('div');
resultsSection.className = 'results';
document.body.appendChild(resultsSection);
updateResults();
