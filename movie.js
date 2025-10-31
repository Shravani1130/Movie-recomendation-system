// Sample movie data
const movies = [
    {
        id: 1,
        title: "Inception",
        year: 2010,
        rating: 8.8,
        genre: ["action", "sci-fi", "thriller"],
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: 9.3,
        genre: ["drama"],
        poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
        genre: ["action", "crime", "drama"],
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: 8.9,
        genre: ["crime", "drama"],
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        rating: 8.8,
        genre: ["drama", "romance"],
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        id: 6,
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
        genre: ["action", "sci-fi"],
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
    },
    {
        id: 7,
        title: "Goodfellas",
        year: 1990,
        rating: 8.7,
        genre: ["biography", "crime", "drama"],
        poster: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
        id: 8,
        title: "Interstellar",
        year: 2014,
        rating: 8.6,
        genre: ["adventure", "drama", "sci-fi"],
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        id: 9,
        title: "Parasite",
        year: 2019,
        rating: 8.6,
        genre: ["comedy", "drama", "thriller"],
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
    },
    {
        id: 10,
        title: "The Godfather",
        year: 1972,
        rating: 9.2,
        genre: ["crime", "drama"],
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    }
];

// DOM elements
const recommendationsContainer = document.getElementById('recommendations');
const trendingContainer = document.getElementById('trending');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the page
function init() {
    displayMovies(movies, recommendationsContainer);
    displayMovies(movies.slice(0, 6), trendingContainer);
    setupEventListeners();
}

// Display movies in a container
function displayMovies(movieList, container) {
    container.innerHTML = '';
    
    if (movieList.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-film"></i>
                <h3>No movies found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }
    
    movieList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.year}</span>
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        <span>${movie.rating}</span>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(movieCard);
    });
}

// Filter movies by genre
function filterMovies(genre) {
    if (genre === 'all') {
        return movies;
    }
    return movies.filter(movie => movie.genre.includes(genre));
}

// Search movies by title
function searchMovies(query) {
    const searchTerm = query.toLowerCase();
    return movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Get selected filter
            const filter = button.dataset.filter;
            const filteredMovies = filterMovies(filter);
            displayMovies(filteredMovies, recommendationsContainer);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// Perform search
function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
        const results = searchMovies(query);
        displayMovies(results, recommendationsContainer);
        
        // Update active filter button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
    } else {
        // If search is empty, show all movies
        displayMovies(movies, recommendationsContainer);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
    }
}

// Initialize the app when the page loads
window.addEventListener('DOMContentLoaded', init);