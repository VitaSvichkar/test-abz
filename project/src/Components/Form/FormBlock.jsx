import c from './_formBlock.module.scss';
import { useEffect, useState } from 'react';
import { Position } from './Positions/Position';
import { getPositions } from '../../api/positions';
import { Input } from './Input/Input';
import { UploadFile } from './UploadFile/UploadFile';

export const FormBlock = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    getPositions().then((data) => setPositions(data.positions));
  }, []);

  return (
    <section className={c.formBlock} id="signUp">
      <h2>Working with POST request</h2>

      <form className={c.form}>
        <div className={c.fields}>
          <Input text="Your name" type="text" />
          <Input text="Email" type="email" />
          <Input text="Phone" type="tel" helperText="+38 (XXX) XXX - XX - XX" />
        </div>

        {/* Positions */}
        <fieldset className={c.fieldset}>
          <legend>Select your position</legend>
          <div className={c.positions}>
            {positions.map((position) => (
              <Position key={position.id} name={position.name} />
            ))}
          </div>
        </fieldset>

        {/* Upload File */}
        <UploadFile />

        <div className={c.wrapBtn}>
          <button className="signUpBtn" disabled>
            Sign up
          </button>
        </div>
      </form>
    </section>
  );
};
