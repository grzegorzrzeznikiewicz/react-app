import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {updateSearchString, getSearchString} from "../../redux/store";

const SearchForm = () => {
    const searchString = useSelector(getSearchString);
    const [value, setValue] = useState(searchString);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateSearchString(value));
    };
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput
                placeholder="Search…"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;