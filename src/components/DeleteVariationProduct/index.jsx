import { Popconfirm } from "antd";
import { useUpdateWithMultipleKeys } from "../../hooks/api-hooks";
import { remove_variation, get_draft_product_staff, get_published_product } from "../../api/productApi";
import useNotification from "../../hooks/useNotification";
import { message } from "antd";

const DeleteVariation = ({ children, propertyId, productId }) => {
    const { success_message } = useNotification();
    const { mutate } = useUpdateWithMultipleKeys(remove_variation(productId), undefined, () => { 
        success_message('products', 'delete_variation')
    }, (error) => {
        message.error(error.response.data.error.message)
    }, [get_draft_product_staff(), get_published_product()]);
    const confirm = (e) => {
        mutate({
            property_id: propertyId
        });
    };
    const cancel = () => { };
    return (
        <Popconfirm
            title="Delete variation"
            description="Are you sure to delete this variation?"
            okType="link"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            {children}
        </Popconfirm>
    );
};

export default DeleteVariation;
