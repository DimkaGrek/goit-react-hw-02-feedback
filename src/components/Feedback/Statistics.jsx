const Statistics = ({ good, neutral, bad, total, positivePercent }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <hr />
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercent}%</p>
  </>
);

export default Statistics;
