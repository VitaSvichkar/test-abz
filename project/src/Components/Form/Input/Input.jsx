import c from './_input.module.scss';

export const Input = ({ text, type, helperText }) => {
  return (
    <label className={c.label}>
      <input className={c.input} type={type} placeholder=" " />
      <span className={c.labelText}>{text}</span>

      {helperText && <span className={c.helperText}>{helperText}</span>}
    </label>
  );
};
