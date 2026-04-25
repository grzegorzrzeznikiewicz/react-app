import styles from "../ListForm/ListForm.module.scss";
import Button from "../Button/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addList} from "../../redux/store";
import TextInput from "../TextInput/TextInput";

const ListForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, icon, listId: props.listId}));
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <label>Title: <TextInput value={title} onChange={e => setTitle(e.target.value)}/></label>
            <label>Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)}/></label>
            <Button>
                Add list
            </Button>
        </form>
    );
}

export default ListForm;
