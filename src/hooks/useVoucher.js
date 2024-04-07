import { get_create_voucher_api, get_voucher_api } from "../api/voucherApi";
import { usePost } from "./api-hooks";
import {Form} from 'antd'
import useNotification from "./useNotification";
function useVoucher() {
    const {success_message, error_message} = useNotification()
    const [form] = Form.useForm();
    const { mutate: createMutation } = usePost(get_create_voucher_api(), undefined, () => {
        success_message('voucher', 'add')
        form.resetFields();
     }, () => { 
        error_message('voucher', 'add')

     }, get_voucher_api())

    const createVoucher = (values) => {
        const { name, description, type, code, value, start_date, end_date, maximum_use, maximum_use_per_user, minimum_order_value, products } = values;

        const body = {
            "name": name,
            "description": description,
            "type": type,
            "code": code,
            "value": value,
            "start_date": start_date,
            "end_date": end_date,
            "maximum_use": maximum_use,
            "maximum_use_per_user": maximum_use_per_user,
            "minimum_order_value": minimum_order_value,
            "is_active": 1,
            "products": products ? products.map(item => item._id) : []
        }

        createMutation(body)
    }

    return { createVoucher, form };
}

export default useVoucher;