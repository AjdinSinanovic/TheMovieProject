import './Home.css';

export default function Home() {
  const movies = [
    { id: 1, title: 'Film 1', img: 'https://via.placeholder.com/200x300?text=Film+1' },
    { id: 2, title: 'Film 2', img: 'https://via.placeholder.com/200x300?text=Film+2' },
    { id: 3, title: 'Film 3', img: 'https://via.placeholder.com/200x300?text=Film+3' },
    { id: 4, title: 'Film 4', img: 'https://via.placeholder.com/200x300?text=Film+4' },
    { id: 5, title: 'Film 5', img: 'https://via.placeholder.com/200x300?text=Film+5' },
  ];

  const series = [
    { id: 1, title: 'Serija 1', img: 'https://via.placeholder.com/200x300?text=Serija+1' },
    { id: 2, title: 'Serija 2', img: 'https://via.placeholder.com/200x300?text=Serija+2' },
    { id: 3, title: 'Serija 3', img: 'https://via.placeholder.com/200x300?text=Serija+3' },
    { id: 4, title: 'Serija 4', img: 'https://via.placeholder.com/200x300?text=Serija+4' },
    { id: 5, title: 'Serija 5', img: 'https://via.placeholder.com/200x300?text=Serija+5' },
  ];

  return (
    <div className="home">

      <header className="hero">
        <div className="overlay">
          <h1>Filmarium</h1>
          <p>Gledaj omiljene filmove i serije, bilo kada i bilo gdje.</p>
          <button className="cta">Pogledaj odmah</button>
        </div>
      </header>

      <section className="movie-section">
        <h2>Popularni filmovi</h2>
        <div className="movie-row">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="movie-section">
        <h2>Popularne serije</h2>
        <div className="movie-row">
          {series.map((show) => (
            <div className="movie-card" key={show.id}>
              <img src={show.img} alt={show.title} />
              <p>{show.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
