import { useState } from 'react'
import AppModal from '../../../components/AppModal'
import { Form } from 'antd'
import FormTextArea from "@components/FormTextArea";
import { useUpdate } from '../../../hooks/api-hooks';
import { get_all_delivery_trip_pending_staff, reject_delivery_trip } from '../../../api/deliveryTripApi';
import useNotification from '../../../hooks/useNotification';
import PropTypes from "prop-types";

const RejectButton = ({ id }) => {
    const { success_message, error_message } = useNotification();
    console.log(id)
    const { mutate: reject } = useUpdate(reject_delivery_trip(id), undefined, () => {
        success_message('deliveryTrip', 'reject')

    }, () => {
        error_message('deliveryTrip', 'reject')

    }, get_all_delivery_trip_pending_staff())
    const [openRejectModal, setOpenRejectModal] = useState(false)

    const onFinish = (values) => {
        reject(values)

    }
    return (
        <div>
            <button className='text-white bg-red-600 rounded-lg px-4 py-2 font-bold' onClick={() => setOpenRejectModal(true)}>Reject</button>

            <AppModal isOpen={openRejectModal} setIsOpen={setOpenRejectModal}>
                <Form

                    requiredMark="optional"

                    layout="vertical"
                    onFinish={onFinish}
                >
                    <FormTextArea
                        label="Note"
                        name="note"
                        required
                        placeholder="Enter note ..."
                        className="w-full"
                    />
                    <button className="furniture-button mx-auto flex justify-center">submit</button>
                </Form>
            </AppModal>
        </div>
    )
}

RejectButton.propTypes = {
    id: PropTypes.string,
};


export default RejectButton