import MyButton from '../button/MyButton';
// import styles from './index.module.css';

interface IProps {
  page: number;
  pagesArray: number[];
  changePage: (page: number) => void;
}

const Pagination = ({ page, pagesArray, changePage }: IProps) => {
  return (
    <div className="pagination">
      {pagesArray.map((p, id) => {
        return (
          <MyButton
            disabled={p === page ? true : false}
            key={`pagination-btn-${id}`}
            onClick={() => changePage(p)}
          >
            {p}
          </MyButton>
        );
      })}
    </div>
  );
};

export default Pagination;
