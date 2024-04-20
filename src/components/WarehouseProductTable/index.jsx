import { formatCurrency } from '../../utils/formatCurrency';
import { useSearchTableColumn } from "@hooks/useSearchTableColumn";
import { Space, Table } from 'antd';
import DetailButton from '../DetailButton';
import WarehouseProductDetail from '../WarehouseProductDetail';
import { withFetchData } from '../../hocs/withFetchData';
import { get_published_product } from '../../api/productApi';
import { isAdmin } from '../../utils/getCurrentUserRole';
import { DEPLOY_PRODUCT_DETAIL_URL } from '../../constants/url';
import LinkNewTab from '../LinkNewTab';
const WarehouseProductTable = ({ data }) => {
    const admin = isAdmin();
    const { getColumnSearchProps } = useSearchTableColumn()
    const STAFF_COLUMNS = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            ...getColumnSearchProps("name"),
            render: (text, record) => <LinkNewTab to={`${DEPLOY_PRODUCT_DETAIL_URL}/${record.slug}`}>{text}</LinkNewTab>,
        },
        {
            title: "Thumb",
            dataIndex: "thumb",
            key: "thumb",
            render: (text, record) => (
                <img
                    src={record.thumbs[0]}
                    alt={record.name}
                    style={{ width: 100, height: 100, objectFit: 'contain' }}
                />
            ),
        },
        {
            title: 'Color',

            render: (text, record) => (

                <div className="flex gap-2 items-center">
                    {record.variation[0].properties.map(property => <div key={property._id} style={{ backgroundColor: property.value, width: 20, height: 20, borderRadius: '50%', border: '1px solid #d3d3d3' }} />)}


                </div>
            )
        },
        {
            title: "Price",
            dataIndex: "regular_price",
            key: "regular_price",
            render: (text) => formatCurrency(text),
        },
        {
            title: "Sell Price",
            dataIndex: "sale_price",
            key: "sale_price",
            render: (text) => formatCurrency(text),
        },
        {
            title: "Description",
            width: '20%',
            render: (_, record) => (
                <span className="text-[#959798] text-xs">{record.description}</span>
            ),
        },
        admin ? null :
            {
                title: "Actions",
                render: (text, record) => (
                    <Space className="flex gap-4">
                        <DetailButton modalWidth={1000}>
                            <WarehouseProductDetail productId={record._id} />
                        </DetailButton>
                    </Space>
                ),
            },

    ].filter(Boolean);
    return (
        <div>
            <Table
                rowKey="_id"
                columns={STAFF_COLUMNS}
                dataSource={data.data}
                pagination={{ hideOnSinglePage: true }}
            />
        </div>
    )
}

export default withFetchData(WarehouseProductTable, get_published_product);