import { useState } from "react"
import { Film } from "../../Types/Types"
import { FilmInput } from "./FilmInput/FilmInput"
import { FilmList } from "./FilmList/FilmsList"

export const AddFilm = () => {
  const [films, setFilms] = useState<Film[]>([]);

  const onAddFilm = (title: string) => {
    const newFilm: Film = {
      id: Date.now(),
      title,
      watched: false
    };
    setFilms([...films, newFilm]);
  };

  const onDeleteFilm = (id: number) => {
    setFilms(films.filter(f => f.id !== id));
  };

  const toggleWatched = (id: number) => {
    setFilms(
      films.map(f =>
        f.id === id ? { ...f, watched: !f.watched } : f
      )
    );
  };

  return (
    <div>
      <h1>Films</h1>
      <FilmInput onAddFilm={onAddFilm} />
      <FilmList
        films={films}
        onDeleteFilm={onDeleteFilm}
        toggleWatched={toggleWatched}
      />
    </div>
  );
};
