import React from 'react';

import styles from './index.module.css';

interface IInputProps extends React.ComponentProps<'input'> {}

const MyInput = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ ...props }, ref) => {
    return (
      <input ref={ref} className={styles.input__mine} {...props} type="text" />
    );
  }
);

export default MyInput;
