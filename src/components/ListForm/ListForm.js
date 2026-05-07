import styles from "../ListForm/ListForm.module.scss";
import Button from "../Button/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addList} from "../../redux/listsRedux";
import TextInput from "../TextInput/TextInput";

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)}/></label>
            <label>Description: <TextInput value={description} onChange={e => setDescription(e.target.value)}/></label>
            <Button>
                Add list
            </Button>
        </form>
    );
}

export default ListForm;
