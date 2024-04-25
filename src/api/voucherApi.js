const VOUCHER_URL = '/voucher'

export const get_voucher_api = () => VOUCHER_URL + '/staff';
export const get_create_voucher_api = () => VOUCHER_URL + '/staff' + '/create-voucher'

export const get_update_voucher_api = (id) => VOUCHER_URL + '/staff' + `/${id}`

export const remove_voucher_api = () => VOUCHER_URL + '/staff'