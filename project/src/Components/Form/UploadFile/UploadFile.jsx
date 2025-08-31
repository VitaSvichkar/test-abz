// import { resolve } from 'path';
import { InputFile } from './InputFile/InputFile';

export const UploadFile = ({ watch, errors, touchedFields, register }) => {
  const uploadValArr = watch('upload') ?? '';

  const fileName =
    uploadValArr && uploadValArr.length > 0 ? uploadValArr[0].name : undefined;

  return (
    <InputFile
      fileName={fileName}
      errors={errors.upload}
      touched={touchedFields?.upload}
      {...register('upload', {
        required: 'This field is required',
        validate: {
          fileTypeAndSize: (files) => {
            if (!files || files.length === 0) {
              return 'This field is required';
            }

            const file = files[0];
            const fileName = file.name.toLowerCase();
            const fileSize = file.size;

            if (!/\.(jpg|jpeg)$/i.test(fileName)) {
              return 'Only JPG/JPEG files allowed';
            }

            if (fileSize > 5 * 1024 * 1024) {
              return 'The photo size must not be greater than 5 Mb';
            }

            return new Promise((resolve) => {
              const img = new Image();
              const url = URL.createObjectURL(file);

              img.onload = () => {
                URL.revokeObjectURL(url);
                if (img.naturalWidth < 70 || img.naturalHeight < 70) {
                  resolve('Minimum photo size is 70x70px');
                } else {
                  resolve(true);
                }
              };

              img.onerror = () => {
                URL.revokeObjectURL(url);
                resolve('Invalid image file');
              };

              img.src = url;
            });
          },
        },
      })}
    />
  );
};
