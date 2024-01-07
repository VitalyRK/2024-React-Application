import { Dispatch, SetStateAction } from 'react';

import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';
import styles from './index.module.css';

interface IPostFilterProps {
  filter: {
    query: string;
    sort: string;
  };
  setFilter: Dispatch<SetStateAction<{ sort: string; query: string }>>;
}

const PostFilter = ({
  filter: { query, sort },
  setFilter,
}: IPostFilterProps) => {
  return (
    <div className={styles.myFilter}>
      <MyInput
        placeholder="Search for..."
        value={query}
        onChange={(e) => setFilter({ sort: sort, query: e.target.value })}
      />
      <MySelect
        value={sort}
        onChange={(selected) => setFilter({ sort: selected, query: query })}
        defaultValue="Sort"
        options={[
          { value: 'title', name: 'Sort by title' },
          { value: 'body', name: 'Sort by text' },
        ]}
      />
    </div>
  );
};

export default PostFilter;
