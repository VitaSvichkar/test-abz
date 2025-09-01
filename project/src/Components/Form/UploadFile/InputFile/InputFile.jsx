import { Error } from '../../Error/Error';
import c from './_inputFile.module.scss';
import { forwardRef } from 'react';

export const InputFile = forwardRef(
  ({ fileName, errors, touched, ...props }, ref) => {
    return (
      <div className={c.upload}>
        <div className={c.wrapUpload}>
          <label>
            <div className={c.uploadInp}>
              <input
                type="file"
                ref={ref}
                {...props}
                accept="image/jpeg,image/jpg"
              />

              <span className={`${c.fileUploadBtn} ${!!errors && c.error}`}>
                Upload
              </span>
            </div>
          </label>

          <span
            className={`${c.fileUploadLabel} ${errors ? c.error : ''} ${
              touched ? c.fileNameStyle : ''
            }`}
          >
            {fileName || 'Upload your photo'}
          </span>
        </div>
        {errors && <Error text={errors.message} />}
      </div>
    );
  }
);
