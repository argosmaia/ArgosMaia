document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from GitHub API
    fetch("https://api.github.com/users/argosmaia/repos")
        .then(response => response.json())
        .then(data => {
            // Extract language data
            const languages = {};
            data.forEach(repo => {
                const language = repo.language;
                if (language) {
                    if (languages[language]) {
                        languages[language]++;
                    } else {
                        languages[language] = 1;
                    }
                }
            });

            // Get canvas element
            const canvas = document.getElementById("language-chart");
            const ctx = canvas.getContext("2d");

            // Create chart
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: Object.keys(languages),
                    datasets: [{
                        label: 'Language Usage',
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
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
