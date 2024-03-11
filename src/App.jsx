import "./App.css";

const LaptopList = ({ laptops }) => {
  const filteredLaptops = laptops.filter(
    (laptop) => laptop.price > 4999 && laptop.price < 15000,
  );
  const laptopsListing = filteredLaptops.map((laptop) => (
    <div>
      <h3>{laptop.brand}</h3>
      <p>Price: {laptop.price}</p>
    </div>
  ));
  return (
    <>
      <h2>Laptops</h2>
      {laptopsListing}
    </>
  );
};

const BookListing = ({ books }) => {
  const filteredList = books.filter((book) => book.genre === "Fantasy");
  const bookListing = filteredList.map((book) => (
    <div>
      <h3>{book.title}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ));
  return (
    <>
      <h2>Books</h2>
      {bookListing}
    </>
  );
};

const PodcastList = ({ podcasts }) => {
  const filteredPodcast = podcasts.filter((podcast) => podcast.duration > 30);
  const podcastListing = filteredPodcast.map((podcast) => (
    <div>
      <h3>{podcast.title}</h3>
      <p>Duration: {podcast.duration}</p>
    </div>
  ));

  return (
    <>
      <h2>Podcasts</h2>
      {podcastListing}
    </>
  );
};

const MoviesList = ({ movies }) => {
  const filteredMovies = movies.filter((movie) => movie.genre === 'Action')
  const movieListing = filteredMovies.map((movie) => (
    <div>
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
    </div>
  ));
  return (
    <>
      <h2>Movies</h2>
      {movieListing}
    </>
  );
};

const JobsList = ({jobs}) => {
  const filteredJobs = jobs.filter((job) => job.type === "Full-time")
  const jobsListing = filteredJobs.map((job) => (
    <div>
      <h3>{job.title}</h3>
      <p>{job.type}</p>
    </div>
  ))
  return (
    <>
      <h2>Jobs</h2>
      {jobsListing}
    </>
  )
}

const SongsList = ({songs}) => {
  const filteredList = songs.filter((song) => song.artist === 'Artist 1')
  const songsListing = filteredList.map((song) => (
    <div>
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
    </div>
  ))
  return (
    <>
      <h2>Songs</h2>
      {songsListing}
    </>
  )
}

export default function App() {
  const laptops = [
    { id: 1, brand: "Dell", price: 8000 },
    { id: 2, brand: "HP", price: 7000 },
    { id: 3, brand: "Lenovo", price: 19000 },
  ];
  const books = [
    { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },
    { id: 2, title: "The Hobbit", genre: "Self-help" },
    { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },
  ];
  const podcasts = [
    { id: 1, title: "Tech Talk", duration: 45 },
    { id: 2, title: "Business Insights", duration: 25 },
    { id: 3, title: "Science Hour", duration: 60 },
  ];
  const movies = [
    { id: 1, title: "Mission Impossible", genre: "Action" },
    { id: 2, title: "Die Hard", genre: "Action" },
    { id: 3, title: "The Avengers", genre: "Adventure" },
  ];
  const jobs = [
    { id: 1, title: "Software Engineer", type: "Full-time" },
    { id: 2, title: "Marketing Manager", type: "Part-time" },
    { id: 3, title: "Data Analyst", type: "Full-time" },
  ];
  const songs = [
    { id: 1, title: "Song 1", artist: "Artist 1" },
    { id: 2, title: "Song 2", artist: "Artist 2" },
    { id: 3, title: "Song 3", artist: "Artist 1" },
  ];
  return (
    <main>
      <LaptopList laptops={laptops} />
      <BookListing books={books} />
      <PodcastList podcasts={podcasts} />
      <MoviesList movies={movies} />
      <JobsList jobs={jobs}/>
      <SongsList songs={songs}/>
    </main>
  );
}
