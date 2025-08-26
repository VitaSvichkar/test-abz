import c from './_formBlock.module.scss';

export const FormBlock = () => {
  return (
    <section className={c.formBlock} id="signUp">
      <h2>Working with POST request</h2>

      <form className={c.form}>
        <div className={c.fields}>
          <label>
            <span className={c.labelText}>Your name</span>
            <input type="text" />
          </label>

          <label>
            <span className={c.labelText}>Email</span>
            <input type="email" />
          </label>

          <label>
            <span className={c.labelText}>Phone</span>
            <span className={c.helperText}>+38 (XXX) XXX - XX - XX</span>
            <input type="phone" />
          </label>
        </div>

        <fieldset className={c.fieldset}>
          <legend>Select your position</legend>

          <div className={c.positions}>
            <label>
              <input
                className={c.radioBox}
                type="radio"
                name="position"
                value="frontend"
                required
              />
              <span className={c.radioStyle}></span>
              Frontend developer
            </label>

            <label>
              <input
                className={c.radioBox}
                type="radio"
                name="position"
                value="backend"
                required
              />
              <span className={c.radioStyle}></span>
              Backend developer
            </label>

            <label>
              <input
                className={c.radioBox}
                type="radio"
                name="position"
                value="designer"
                required
              />
              <span className={c.radioStyle}></span>
              Designer
            </label>

            <label>
              <input
                className={c.radioBox}
                type="radio"
                name="position"
                value="qa"
                required
              />
              <span className={c.radioStyle}></span>
              QA
            </label>
          </div>
        </fieldset>

        <label>
          <div className={c.upload}>
            <input type="file" />
            <span className={c.fileUploadBtn}>Upload</span>
            <span className={c.fileUploadLabel}>Upload your photo</span>
          </div>
        </label>

        <div className={c.wrapBtn}>
          <button className="signUpBtn" disabled>
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};
