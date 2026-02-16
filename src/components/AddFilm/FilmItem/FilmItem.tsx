import { Film } from "../../../Types/Types"

interface FilmItemProps {
  film: Film;
  onDeleteFilm: (id: number) => void;
  toggleWatched: (id: number) => void;
}

export const FilmItem = ({
  film,
  onDeleteFilm,
  toggleWatched
}: FilmItemProps) => {
  return (
    <div>
      <span>{film.title}</span>

      <input
        type="checkbox"
        checked={film.watched}
        onChange={() => toggleWatched(film.id)}
      />

      <button onClick={() => onDeleteFilm(film.id)}>
        Delete
      </button>
    </div>
  );
};
