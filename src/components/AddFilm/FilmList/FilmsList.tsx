import { Film } from "../../../Types/Types"
import { FilmItem } from "../FilmItem/FilmItem"

interface FilmListProps {
  films: Film[];
  onDeleteFilm: (id: number) => void;
  toggleWatched: (id: number) => void;
  setLike: (id: number) => void;
  setDislike: (id: number) => void;
}

export const FilmList = ({
  films,
  onDeleteFilm,
  toggleWatched,
  setLike,
  setDislike
}: FilmListProps) => {
  return (
    <div>
      {films.map(film => (
        <FilmItem
          key={film.id}
          film={film}
          onDeleteFilm={onDeleteFilm}
          toggleWatched={toggleWatched}
          setLike={setLike}
          setDislike={setDislike}
        />
      ))}
    </div>
  );
};