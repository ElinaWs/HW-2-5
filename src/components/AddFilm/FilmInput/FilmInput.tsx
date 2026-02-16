import { useState, ChangeEvent } from "react"

interface FilmInputProps {
  onAddFilm: (title: string) => void;
}

export const FilmInput = ({ onAddFilm }: FilmInputProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submit = () => {
    if (value.trim()) {
      onAddFilm(value);
      setValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="New film"
      />
      <button onClick={submit}>Add</button>
    </div>
  );
};
