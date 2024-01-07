import { ReactNode } from 'react';

import styles from './index.module.css';

interface IProps {
  children?: ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyModal = ({ children, visible, setVisible }: IProps) => {
  const rootClasses = [styles.modal__mine];
  if (visible) {
    rootClasses.push(styles.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        className={styles.modal__content}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
