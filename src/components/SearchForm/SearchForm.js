import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const SearchForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_SEARCHSTRING', payload: value});
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