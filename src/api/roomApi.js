const ROOM_URL = '/room'

export const get_create_room_api = () => ROOM_URL + '/staff';

export const get_all_rooms_api = () => ROOM_URL + '/share';

export const get_published_rooms_api = () => ROOM_URL;

export const get_draft_rooms_api = () => ROOM_URL + '/share' + '/draft'

export const get_to_publish_room_api = (id) => ROOM_URL + '/admin' + '/publish' + `/${id}`

export const get_to_draft_room_api = (id) => ROOM_URL + '/admin' + '/draft' + `/${id}`