interface LikeDislikeProps {
  reaction: "like" | "dislike" | null;
  onLike: () => void;
  onDislike: () => void;
}

export default function LikeDislike({
  reaction,
  onLike,
  onDislike
}: LikeDislikeProps) {
  return (
    <div>
      <button
        onClick={onLike}
        className={reaction === "like" ? "like" : ""}
      >
        Like
      </button>

      <button
        onClick={onDislike}
        className={reaction === "dislike" ? "dislike" : ""}
      >
        Dislike
      </button>
    </div>
  );
}
