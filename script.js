// Fetch repository data from GitHub
async function fetchRepositories(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  return data;
}

// Extract languages used from repository data
function extractLanguages(repositories) {
  const languages = {};
  repositories.forEach(repo => {
    const language = repo.language;
    if (language) {
      if (languages[language]) {
        languages[language]++;
      } else {
        languages[language] = 1;
      }
    }
  });
  return languages;
}

// Render chart using Chart.js
async function renderChart(username) {
  const repositories = await fetchRepositories(username);
  const languages = extractLanguages(repositories);
  
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(languages),
      datasets: [{
        label: 'Programming Languages Usage',
        data: Object.values(languages),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

// Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
renderChart('argosmaia');
