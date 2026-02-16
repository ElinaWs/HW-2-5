import { Film } from "../../../Types/Types"
import LikeDislike from "../LikeDislike/LikeDislike"

interface FilmItemProps {
  film: Film;
  onDeleteFilm: (id: number) => void;
  toggleWatched: (id: number) => void;
  setLike: (id: number) => void;
  setDislike: (id: number) => void;
}

export const FilmItem = ({
  film,
  onDeleteFilm,
  toggleWatched,
  setLike,
  setDislike
}: FilmItemProps) => {
  return (
    <div className="film-item">
      <span>{film.title}</span>

      <input
        type="checkbox"
        checked={film.watched}
        onChange={() => toggleWatched(film.id)}
      />

      <button onClick={() => onDeleteFilm(film.id)}>
        Delete
      </button>

      {film.watched && (
        <LikeDislike
          reaction={film.reaction}
          onLike={() => setLike(film.id)}
          onDislike={() => setDislike(film.id)}
        />
      )}
    </div>
  );
};