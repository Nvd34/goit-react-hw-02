export const Feedback = ({
  feedback: { good, neutral, bad },
  totalFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positeve: {Math.round(((good + neutral) / totalFeedback) * 100)}%</p>
    </div>
  );
};
