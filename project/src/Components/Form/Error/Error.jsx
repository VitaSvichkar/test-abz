import c from './_error.module.scss';

export const Error = ({ text }) => {
  return <span className={c.error}>{text}</span>;
};
