import { Radio, Tag } from 'antd'
import { useState } from 'react'
import SearchInput from '../SearchInput';
import { classNames } from '../../utils/classNames';
import PropTypes from "prop-types";
import { withFetchData } from '../../hocs/withFetchData';
import { create_delivery_trip, get_all_delivery_account } from '../../api/deliveryTripApi';
import { usePost } from '../../hooks/api-hooks';
import { get_orders_request_staff_api } from '../../api/orderApi';
import useNotification from '../../hooks/useNotification';

const SHIPPER_STATUS = {
    1: {
        name: 'Available',
        color: 'green'
    },
    2: {
        name: 'Not Available',
        color: 'red'
    }
}

const ShipperAssignModal = ({ orderId, data, setOpenModal }) => {
    const { success_message, error_message } = useNotification();
    
    const { mutate: assignOrder } = usePost(create_delivery_trip(), undefined, () => {
        success_message('deliveryTrip', 'assign')
    }, () => {
        error_message('deliveryTrip', 'assign')

    }, get_orders_request_staff_api())

    const [shipper, setShipper] = useState(null);
    const handleSearch = (value) => {

    };

    console.log(data);
    const handleSelectShipper = (selectedShipper) => {
        setShipper(selectedShipper);
    };

    const handleSubmit = () => {
        const orders = orderId.map((orderId) => ({
            order: orderId
        }));
        console.log('Selected shipper:', { account_id: shipper._id, orders: orders });
        // setShipper(null)
        // setOpenModal(false);
        assignOrder({ account_id: shipper._id, orders: orders })
    };
    return (
        <div>

            <SearchInput
                onSearch={handleSearch}
                placeholder="Find Shipper by name..."
            />
            <ul className="h-72 overflow-y-auto thin-scroll-bar">
                {data.data.map((item) =>

                    <li
                        onClick={() => setShipper(item)}
                        className="hover:cursor-pointer hover:opacity-50 my-2 border-b-[1px] py-2 mr-2"
                        key={item._id}
                    >

                        <div className='flex justify-between'>
                            <span>
                                <Radio
                                    onChange={() => handleSelectShipper(item._id)}
                                    checked={shipper && shipper._id === item._id}
                                />
                                {item.first_name} {item.last_name}
                            </span>

                            <Tag color={SHIPPER_STATUS[item.status].color}>
                                <span className='font-bold'>
                                    {SHIPPER_STATUS[item.status].name}
                                </span></Tag>


                        </div>

                    </li>
                )}

            </ul>
            <button className={classNames("furniture-button mx-auto flex justify-center", !shipper ? 'hover:cursor-not-allowed opacity-40' : '')} onClick={handleSubmit} disabled={!shipper}>Submit</button>


        </div>
    )
}

ShipperAssignModal.propTypes = {
    orderId: PropTypes.array,
    data: PropTypes.object,
    setOpenModal: PropTypes.func,
};


export default withFetchData(ShipperAssignModal, get_all_delivery_account);