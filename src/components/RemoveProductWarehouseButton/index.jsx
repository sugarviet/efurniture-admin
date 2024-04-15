import { Button, Popconfirm } from 'antd';
import { useDelete, useDeleteWithBody, useUpdate } from '../../hooks/api-hooks';
import useNotification from '../../hooks/useNotification';
import PropTypes from "prop-types";


const RemoveProductWarehouseButton = ({ url, notiType,
    notiAction, refreshKey, data }) => {

    const { error_message, success_message } = useNotification();
    const { mutate: deleteItem } = useUpdate(
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
        deleteItem(data)
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

RemoveProductWarehouseButton.propTypes = {
    url: PropTypes.string,
    refreshKey: PropTypes.string,
    notiType: PropTypes.string,
    notiAction: PropTypes.string,
    id: PropTypes.string,
};


export default RemoveProductWarehouseButton