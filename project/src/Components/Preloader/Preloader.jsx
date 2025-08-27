import preloader from '/public/preloader.svg';
import c from './_preloader.module.scss';

export const Preloader = () => {
  return (
    <span>
      <img src={preloader} alt="#" className={c.preloader} />
    </span>
  );
};
