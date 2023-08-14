import React from 'react';

import { useField } from 'formik';

import styles from './index.module.scss';

const InputField = ({ label, wx, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} style={{ '--width': `${wx}px` }} className={styles.input} />
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
      {/* <Field
        type={type ? type : 'text'}
        placeholder={placeholder ? placeholder : ''}
        name={name}
        className={styles.input}
        style={{ '--width': `${wx}px` }}
      /> */}
      {/* <ErrorMessage name={name} /> */}
    </>
  );
};

export default InputField;
