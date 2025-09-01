import { Position } from './Positions/Position';
import c from './_fieldSetPositions.module.scss';

export const FieldSetPositions = ({ positions, errors, register }) => {
  return (
    <fieldset className={c.fieldset}>
      <legend>Select your position</legend>
      <div>
        {positions.map((position) => (
          <Position
            key={position.id}
            position={position.name}
            errors={errors.position}
            id={position.id}
            {...register('position', {
              required: 'This field is required',
            })}
          />
        ))}
      </div>
    </fieldset>
  );
};
