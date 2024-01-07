import styles from './index.module.css';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const MyButton = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={styles.button__mine} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
