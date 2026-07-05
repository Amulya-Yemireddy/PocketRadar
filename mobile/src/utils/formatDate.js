export function formatDate(date) {
  const today = new Date();
  const input = new Date(date);

  const diff =
    Math.floor(
      (today - input) /
        (1000 * 60 * 60 * 24)
    );

  if (diff === 0) return "Today";

  if (diff === 1) return "Yesterday";

  return input.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}