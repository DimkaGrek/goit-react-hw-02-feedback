import s from './Feedback.module.css';
const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div className={s.buttons}>
    <button type="button" onClick={onGood} className={s.btn}>
      Good
    </button>
    <button type="button" onClick={onNeutral} className={s.btn}>
      Neutral
    </button>
    <button type="button" onClick={onBad} className={s.btn}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
