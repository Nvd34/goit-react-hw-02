export const Feedback = ({
  feedback: { good, neutral, bad },
  positiveFeedback,
  totalFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positeve: {positiveFeedback}%</p>
    </div>
  );
};
