import { Button, message, Popconfirm } from 'antd';
import { useDelete } from '../../hooks/api-hooks';
import useNotification from '../../hooks/useNotification';
import PropTypes from "prop-types";


const DeleteButton = ({ url, notiType,
    notiAction, refreshKey, id }) => {

    const { error_message, success_message } = useNotification();
    const { mutate: deleteItem } = useDelete(
        url,
        undefined,
        () => {
            success_message(notiType, notiAction)
        },
        (error) => {
            error_message(notiType, notiAction, error)

        },
        refreshKey
    );
    const confirm = (e) => {
        deleteItem(id)
    };
    const cancel = () => {

    };
    return (
        <Popconfirm

            title="Delete the task"
            description="Are you sure to delete this task?"
            okType='link'
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button danger type='text' className='font-bold uppercase'>Remove</Button>
        </Popconfirm>
    )
}

DeleteButton.propTypes = {
    url: PropTypes.string,
    refreshKey: PropTypes.string,
    notiType: PropTypes.string,
    notiAction: PropTypes.string,
    id: PropTypes.string,
};


export default DeleteButton