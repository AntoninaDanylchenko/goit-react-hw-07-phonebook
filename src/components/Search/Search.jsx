import css from './Search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';

const Search = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    console.log(query);
    dispatch(addFilter(query.toLowerCase()));
  };
  const filter = useSelector(getFilter);

  return (
    <label htmlFor="findInputId" className={css.findLabel}>
      Find contacts by name
      <input
        type="text"
        placeholder=""
        name="filterContact"
        value={filter}
        id="findInputId"
        onChange={e => onFilterChange(e.target.value)}
        className={css.findInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </label>
  );
};

export default Search;
