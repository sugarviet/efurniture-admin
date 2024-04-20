import { Descriptions, Form } from 'antd'
import PropTypes from "prop-types";
import { formatCurrency } from '../../utils/formatCurrency';
import FormUploadButton from '../FormUploadButton';
import { useUpdate } from '../../hooks/api-hooks';
import { confirm_request_refund, get_all_reports } from '../../api/reportApi';

const ReportDetail = ({ data }) => {
    console.log(data);
    const { mutate: confirmReport } = useUpdate(confirm_request_refund(data._id), undefined, () => { }, () => { }, get_all_reports());
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <span className='font-bold text-lg uppercase'>### Customer</span>
                <Descriptions bordered column={1}>
                    <Descriptions.Item label="Customer's name">{data.requester.name}</Descriptions.Item>
                    <Descriptions.Item label="Customer's email">{data.requester.email}</Descriptions.Item>
                    <Descriptions.Item label="Bank">{data.requester.bank_name}</Descriptions.Item>
                    <Descriptions.Item label="Bank Account Name">{data.requester.bank_account_name}</Descriptions.Item>
                    <Descriptions.Item label="Bank number">{data.requester.account_number}</Descriptions.Item>
                    <Descriptions.Item label="Amount">{formatCurrency(data.amount)}</Descriptions.Item>
                    <Descriptions.Item label="Note">{data.note}</Descriptions.Item>

                </Descriptions>

            </div>
            <Form layout="vertical"
                requiredMark='optional' initialValues={{ thumbs: data.thumbs }}>
                <FormUploadButton label="Image" name='image' className='xl:w-[45rem] lg:w-[40rem] xl:h-[10rem]' defaultFileList={data.thumbs}/>
                <button className="furniture-button rounded-md flex mx-auto">Submit</button>
            </Form>



        </div>
    )
}

ReportDetail.propTypes = {
    data: PropTypes.object,
};
export default ReportDetail