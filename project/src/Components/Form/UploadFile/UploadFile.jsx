// import c from './uploadFile.module.scss';
import c from './_uploadFile.module.scss';

export const UploadFile = () => {
  return (
    <label>
      <div className={c.upload}>
        <input type="file" />
        <span className={c.fileUploadBtn}>Upload</span>
        <span className={c.fileUploadLabel}>Upload your photo</span>
      </div>
    </label>
  );
};
