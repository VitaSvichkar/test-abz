import c from './_hero.module.scss';

export const Hero = () => {
  return (
    <section className={c.heroWrap}>
      <div className={c.hero}>
        <h1>Test assignment for front-end developer</h1>

        <p className={c.heroDescription}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>

        <div className={c.wrapBtn}>
          <a href="#signUp" className="signUpBtn">
            Sign up
          </a>
        </div>
      </div>

      <div className={c.heroImg}></div>
    </section>
  );
};
