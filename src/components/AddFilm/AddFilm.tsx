import { useState } from "react"
import { Film } from "../../Types/Types"
import { FilmList } from "./FilmList/FilmsList"
import { FilmInput } from "./FilmInput/FilmInput"

export const AddFilm = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const onAddFilm = (newFilmString: string) => {
    const newFilm: Film = {
      id: Date.now(),
      title: newFilmString,
      watched: false,
      reaction: null
    };
    setFilms([...films, newFilm]);
  };

  const onDeleteFilm = (id: number) => {
    setFilms(films.filter(film => film.id !== id));
  };

  const toggleWatched = (id: number) => {
    setFilms(
      films.map(film =>
        film.id === id
          ? { ...film, watched: !film.watched, reaction: null }
          : film
      )
    );
  };

  const setLike = (id: number) => {
    setFilms(
      films.map(film =>
        film.id === id ? { ...film, reaction: "like" } : film
      )
    );
  };

  const setDislike = (id: number) => {
    setFilms(
      films.map(film =>
        film.id === id ? { ...film, reaction: "dislike" } : film
      )
    );
  };

  return (
    <div className="container">
      <h1>My top films:</h1>
      <FilmInput onAddFilm={onAddFilm} />
      <FilmList
        films={films}
        onDeleteFilm={onDeleteFilm}
        toggleWatched={toggleWatched}
        setLike={setLike}
        setDislike={setDislike}
      />
    </div>
  );
};
