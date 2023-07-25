### Hi there 👋

### Bio: 

<html>
<head>
<title>Argos's Resume</title>
</head>
<body>
<h1>Argos</h1>
<p>I am an undergraduate student at the State University of Rio de Janeiro (UERJ) and I interned on a project at Ideiaglobo at the Pontifical Catholic University of Rio de Janeiro (PUC-RJ) from July 2022 to March 2023.</p>
<p>During my internship, I developed experience in programming languages such as Java, SwiftUI, and Python. I also developed a website using HTML, Bootstrap 5, and JS, and a game using ARKit for Swift. I used Java and Python for the game, but due to a confidentiality contract, I am not able to show it.</p>
<p>I am currently learning other programming languages, such as C, C++, C#, and Rust. I am also multi-tasking and I like to do many projects. I am not a senior developer, but I am an intern/junior developer who is trying to gain experience in as many areas as possible.</p>
<p>As I mentioned in my bio below my profile pic, I like software development (mobile and desktop), game development, and cybersecurity (not professional, yet a beginner).</p>
</body>
</html>



<!--<div style="text-align: center;">
  <a href="https://github.com/argosmaia">
    <img height="300em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=argosmaia&langs_count=7&theme=dracula"/><br>
  </a>
</div>-->


<head>
  <meta charset="UTF-8">
  <title>Linguagens Mais Usadas</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="chart-container">
    <canvas id="language-chart"></canvas>
  </div>
  <script src="script.js"></script>
</body>

body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

.chart-container {
  width: 400px;
  height: 300px;
  margin: 0 auto;
}

const token = 'SEU_TOKEN_DE_ACESSO_AQUI';
const username = 'SEU_NOME_DE_USUARIO_AQUI';

async function getRepoLanguages(username, token) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const repositories = await response.json();

    const languages = repositories.reduce((acc, repo) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1;
      }
      return acc;
    }, {});

    const totalRepositories = repositories.length;
    for (const lang in languages) {
      languages[lang] = ((languages[lang] / totalRepositories) * 100).toFixed(2);
    }

    return languages;
  } catch (error) {
    console.error('Erro ao obter informações do GitHub:', error);
    return null;
  }
}

async function createChart() {
  const languages = await getRepoLanguages(username, token);
  if (!languages) return;

  const chartCanvas = document.getElementById('language-chart');
  const chartData = {
    labels: Object.keys(languages),
    datasets: [{
      data: Object.values(languages),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        // Adicione mais cores de fundo conforme necessário.
      ],
    }],
  };

  new Chart(chartCanvas, {
    type: 'bar',
    data: chartData,
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
          },
        }],
      },
    },
  });
}

createChart();


### Past work experience:
<p>PUC/IdeiaGlobo: JUL/22 to MAR/23

### Actual works
<P>Volunteering at a extension project teaching computational thinking at schools: JUL/23</P>

### Habilities:
<p>• Teamwork and Individual work
<p>• English: <b> Intermediary</b>
<p>• Japanese - <b>Basic</b> - Certified: JLPT N5
<p>• Chinese - <b>Basic</b>
<p>• Spanish - <b>Basic</b>
<p>• Flexibility, proactivity, and good communication

### Courses attended:
<p>• Data Science 2023 Formation: Online course
<p>• Excel: JAN/2020
<p>• Seven Entertainment: Game Design DEZ/2011 - DEZ/2014

### Support:

```As I am a State pensioner until I turn 24 y.o., I cannot work as a professional until December 2023, but I can do internships or projects that do not require an employment relationship (freelance or open-source)```

E-mail contact: argosmaia5@gmail.com

<i>BTC Wallet address of Coinbase Account to receive support from users:</i>
<p>
<b>3N3A9qkSmJpFxuShdkq2DU5P3Jh1FcnT4w</b>
<p>
<i>ETH Wallet Coinbase:</i>
<p>
<b>0x4fB44F9A30849e76060118445455Ff4F35C1D6E4</b>

```With your support I can buy a better Notebook [my actual NB is weak (Core i3 with 2.4 Ghz)]```
