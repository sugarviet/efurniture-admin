import { get_create_room_api, get_draft_rooms_api } from "../api/roomApi";
import { usePost } from "./api-hooks";

function useRoom() {
    const { mutate: createRoomMutation } = usePost(get_create_room_api(), undefined, () => { }, () => { }, get_draft_rooms_api());

    const createRoom = (data) => {
        const { name, description, thumb, products } = data;

        const body = {
            "name": name,
            "description": description,
            "thumb": thumb.file.url,
            "products": products
        }

        console.log(body);

        createRoomMutation(body);
    }

    return { createRoom };
}

export default useRoom;