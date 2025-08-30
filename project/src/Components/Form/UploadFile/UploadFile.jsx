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
          fileType: (files) => {
            if (!files || files.length === 0) {
              return 'This field is required';
            }
            const fileName = files[0].name.toLowerCase();
            return (
              /\.(jpg|jpeg|png)$/i.test(fileName) ||
              'Only JPG/JPEG/PNG files allowed'
            );
          },
        },
      })}
    />
  );
};
