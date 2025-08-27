import c from './_position.module.scss';

export const Position = ({ name }) => {
  return (
    <label className={c.positionLabel}>
      <input
        className={c.radioBox}
        type="radio"
        name="position"
        value={name}
        required
      />
      <span className={c.radioStyle}></span>
      {name}
    </label>
  );
};
