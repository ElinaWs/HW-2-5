import { Film } from "../../../Types/Types"
import { FilmItem } from "../FilmItem/FilmItem"

interface FilmListProps {
  films: Film[];
  onDeleteFilm: (id: number) => void;
  toggleWatched: (id: number) => void;
}

export const FilmList = ({
  films,
  onDeleteFilm,
  toggleWatched
}: FilmListProps) => {
  return (
    <div>
      {films.map(film => (
        <FilmItem
          key={film.id}
          film={film}
          onDeleteFilm={onDeleteFilm}
          toggleWatched={toggleWatched}
        />
      ))}
    </div>
  );
};
