import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
  <div className={s.buttons}>
    <button type="button" onClick={onGood} className={s.btn_good}>
      Good
    </button>
    <button type="button" onClick={onNeutral} className={s.btn_neutral}>
      Neutral
    </button>
    <button type="button" onClick={onBad} className={s.btn_bad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
