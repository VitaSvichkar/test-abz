import c from './_hero.module.scss';

export const Hero = () => {
  return (
    <section className={c.heroWrap}>
      <div className={c.heroText}>
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

      <div className={c.heroImg}>
        <picture>
          <source
            srcset="/bgHero/bgHeroMobile.jpg"
            media="(max-width: 360px)"
          />
          <source
            srcset="/bgHero/bgHeroTablet.jpg"
            media="(max-width: 768px)"
          />
          <source
            srcset="/bgHero/bgHeroLaptop.jpg"
            media="(max-width: 1024px)"
          />
          <img src="/bgHero/bgHero.jpg" alt="field" />
        </picture>
      </div>
    </section>
  );
};
