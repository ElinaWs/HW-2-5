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
      <button onClick={onLike}>
        {reaction === "like" ? "Liked" : "Like"}
      </button>

      <button onClick={onDislike}>
        {reaction === "dislike" ? "Disliked" : "Dislike"}
      </button>
    </div>
  );
}
