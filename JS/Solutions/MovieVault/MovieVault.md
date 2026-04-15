# MovieVault App - Build Instructions

![Movie Valut](https://github.com/Devtonicacademy/frontend-course-material/blob/main/JS/Solutions/MovieVault/Screenshot%202026-04-15%20080514.png?raw=true)

## Overview

MovieVault is a personal movie database web application where users can add, search, and filter movies. The app has a dark, modern interface with a responsive grid layout.

## Features

- **Add Movies** - Add new movies with title, director, year, rating, and genres
- **Search** - Find movies by title or director name
- **Filter by Genre** - View movies by selected genre
- **Responsive Design** - Works on desktop and mobile devices
- **Local Data Storage** - Movies are stored in a JavaScript object

## How to Build It

### Step 1: Set Up HTML Structure

Create an HTML file with:

- A header section with title "MovieVault"
- A form to input movie details (title, director, year, rating, genres)
- An add button to submit the form
- A search input field
- A genre filter dropdown
- A movie grid container to display all movies

### Step 2: Style with CSS

Add styles for:

- Dark gradient background (#1a1a2e to #16213e)
- Movie cards with hover effects
- Responsive grid layout (3 columns on desktop, 1 on mobile)
- Form inputs and buttons
- Genre tags and rating badges in cyan (#00ffcc)

### Step 3: Create JavaScript Data Structure

Build a `movieDB` object with:

- `movies[]` array to store all movie objects
- `addMovie()` - Add a new movie to the array
- `getAllMovies()` - Return all movies
- `searchMovies(query)` - Filter by title or director
- `filterByGenre(genre)` - Filter by genre

### Step 4: Create Display Functions

Write functions to:

- `renderMovies()` - Display movies in the grid
- `addMovie()` - Handle form submission
- `filterMovies()` - Search and filter combined
- `updateGenreFilter()` - Populate genre dropdown dynamically
- `init()` - Initialize the app on page load

### Step 5: Add Interactivity

- Form submission clears input fields after adding
- Search updates in real-time as user types
- Genre dropdown updates when new genres are added
- Combines search AND filter for precise results

## Sample Movie Data

Start with 4 sample movies:

1. Dune: Part Two (2024) - Sci-Fi, Adventure, Drama - 8.8★
2. Oppenheimer (2023) - Biography, Drama, History - 8.5★
3. The Batman (2022) - Action, Crime, Drama - 7.8★
4. Everything Everywhere All at Once (2022) - Action, Adventure, Comedy - 8.0★

## Key Concepts Used

- **Objects & Arrays** - Store and manage movie data
- **String Methods** - Search functionality (includes, toLowerCase)
- **Array Methods** - Filter, map, forEach for data manipulation
- **DOM Manipulation** - Create and update HTML elements
- **Form Handling** - Capture and validate user input
- **Event Listeners** - Respond to clicks and typing
- **Template Literals** - Generate HTML dynamically

## Testing Checklist

- [ ] Can add a new movie with all fields
- [ ] Search finds movies by title
- [ ] Search finds movies by director
- [ ] Genre filter dropdown appears correctly
- [ ] Filtering by genre works
- [ ] Search + filter work together
- [ ] Form clears after submission
- [ ] Responsive on mobile devices
- [ ] Movie cards display all information

## Tips for Students

- Start by building the HTML structure first
- Test CSS styling before adding JavaScript
- Build and test one function at a time
- Use `console.log()` to debug data
- Test edge cases (empty fields, special characters)
- Customize with your own movie selections!
