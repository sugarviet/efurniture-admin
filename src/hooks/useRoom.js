import { get_create_room_api, get_draft_rooms_api, update_room_staff } from "../api/roomApi";
import { usePost, useUpdate } from "./api-hooks";
import useNotification from "./useNotification";
import { Form, Button } from "antd";

function useRoom(slug) {
  const [form] = Form.useForm();
    const { success_message, error_message } = useNotification();
    const { mutate: createRoomMutation } = usePost(get_create_room_api(), undefined, () => {
        success_message('room', 'add_draft')
        form.resetFields();
    }, () => {
        error_message('room', 'add_draft')
    }, get_draft_rooms_api());

    const { mutate: editRoom } = useUpdate(update_room_staff(slug), undefined, () => {
        success_message('room', 'edit')

    }, () => {
        error_message('room', 'edit')

    }, get_draft_rooms_api())

    const createRoom = (data) => {
        const { name, description, thumb, products } = data;

        const body = {
            "name": name,
            "description": description,
            "thumb": thumb.file.url,
            "products": products.map(item => ({ product: item.product._id, quantity: item.quantity }))
        }

        createRoomMutation(body);
    }

    const handleEditRoom = (data) => {


        editRoom(data);
    }

    return { createRoom, handleEditRoom, form };
}

export default useRoom;