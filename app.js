// Planet data
const planetData = {
    mercury: {
        name: "Mercury",
        description: "The smallest planet in our solar system and closest to the Sun, Mercury is a world of extremes. With no atmosphere to retain heat, temperatures swing from scorching hot to freezing cold. Its cratered surface resembles our Moon.",
        stats: {
            "Distance from Sun": "57.9 million km",
            "Travel Time": "6-7 months",
            "Diameter": "4,879 km",
            "Day Length": "59 Earth days"
        }
    },
    venus: {
        name: "Venus",
        description: "Often called Earth's twin due to similar size, Venus is actually a hostile world. Its thick atmosphere creates a runaway greenhouse effect, making it the hottest planet. Clouds of sulfuric acid and crushing atmospheric pressure make it one of the most extreme environments.",
        stats: {
            "Distance from Sun": "108.2 million km",
            "Travel Time": "3-4 months",
            "Diameter": "12,104 km",
            "Day Length": "243 Earth days"
        }
    },
    earth: {
        name: "Earth",
        description: "Our home planet is the only known world with life. Earth's perfect distance from the Sun, protective atmosphere, and abundant water make it a unique oasis in space. From space, you can see swirling clouds, vast oceans, and continents.",
        stats: {
            "Distance from Sun": "149.6 million km",
            "Travel Time": "Already here!",
            "Diameter": "12,742 km",
            "Day Length": "24 hours"
        }
    },
    mars: {
        name: "Mars",
        description: "The Red Planet has captivated humanity for centuries. Mars has seasons, polar ice caps, and evidence of ancient water flows. It's the most Earth-like planet and our best candidate for future human colonization.",
        stats: {
            "Distance from Sun": "227.9 million km",
            "Travel Time": "7-9 months",
            "Diameter": "6,779 km",
            "Day Length": "24.6 hours"
        }
    },
    jupiter: {
        name: "Jupiter",
        description: "The largest planet in our solar system, Jupiter is a gas giant with stunning cloud bands and the iconic Great Red Spot - a storm larger than Earth that has raged for centuries. It has at least 79 moons, including Europa which may harbor life.",
        stats: {
            "Distance from Sun": "778.5 million km",
            "Travel Time": "2-3 years",
            "Diameter": "139,820 km",
            "Day Length": "10 hours"
        }
    },
    saturn: {
        name: "Saturn",
        description: "Famous for its spectacular ring system, Saturn is a gas giant that could float in water. Its rings are made of billions of ice particles, ranging from tiny grains to house-sized chunks. Saturn has 82 known moons, including Titan with its thick atmosphere.",
        stats: {
            "Distance from Sun": "1.4 billion km",
            "Travel Time": "3-4 years",
            "Diameter": "116,460 km",
            "Day Length": "10.7 hours"
        }
    },
    uranus: {
        name: "Uranus",
        description: "This ice giant rolls through space on its side, likely due to an ancient collision. Uranus has a blue-green color from methane in its atmosphere and experiences the most extreme seasons in the solar system, with each pole getting 42 years of continuous sunlight or darkness.",
        stats: {
            "Distance from Sun": "2.9 billion km",
            "Travel Time": "8-9 years",
            "Diameter": "50,724 km",
            "Day Length": "17.2 hours"
        }
    },
    neptune: {
        name: "Neptune",
        description: "The windiest planet in our solar system, Neptune has supersonic winds reaching 2,100 km/h. This deep blue world is the farthest planet from the Sun and was the first planet found through mathematical prediction rather than observation.",
        stats: {
            "Distance from Sun": "4.5 billion km",
            "Travel Time": "12+ years",
            "Diameter": "49,244 km",
            "Day Length": "16 hours"
        }
    }
};

// Get DOM elements
const planetButtons = document.querySelectorAll('.planet-btn');
const planetName = document.getElementById('planetName');
const planetDescription = document.getElementById('planetDescription');
const planetStats = document.getElementById('planetStats');
const launchBtn = document.getElementById('launchBtn');
const missionStatus = document.getElementById('missionStatus');
const statusMessage = document.getElementById('statusMessage');

let selectedPlanet = null;

// Add click event listeners to planet buttons
planetButtons.forEach(button => {
    button.addEventListener('click', () => {
        const planet = button.dataset.planet;
        displayPlanetInfo(planet);
        selectedPlanet = planet;

        // Highlight selected button
        planetButtons.forEach(btn => btn.style.opacity = '0.7');
        button.style.opacity = '1';
    });
});

// Display planet information
function displayPlanetInfo(planet) {
    const data = planetData[planet];

    planetName.textContent = data.name;
    planetDescription.textContent = data.description;

    // Create stats HTML
    let statsHTML = '';
    for (const [label, value] of Object.entries(data.stats)) {
        statsHTML += `
            <div class="stat-item">
                <div class="stat-label">${label}</div>
                <div class="stat-value">${value}</div>
            </div>
        `;
    }
    planetStats.innerHTML = statsHTML;

    // Show launch button
    launchBtn.style.display = 'inline-block';
    missionStatus.style.display = 'none';
}

// Launch mission
launchBtn.addEventListener('click', () => {
    if (!selectedPlanet) return;

    const data = planetData[selectedPlanet];
    missionStatus.style.display = 'block';
    statusMessage.textContent = `Mission to ${data.name} is launching! Estimated travel time: ${data.stats['Travel Time']}`;

    // Scroll to mission status
    missionStatus.scrollIntoView({ behavior: 'smooth' });

    // Simulate mission progress
    setTimeout(() => {
        statusMessage.textContent = `En route to ${data.name}... All systems nominal! 🌟`;
    }, 2000);

    setTimeout(() => {
        statusMessage.textContent = `Welcome to ${data.name}! Mission successful! 🎉`;
    }, 4000);
});

// Initialize - reset all button opacities
planetButtons.forEach(btn => btn.style.opacity = '0.7');
