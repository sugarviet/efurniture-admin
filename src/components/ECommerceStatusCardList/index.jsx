import { withFetchData } from "@hocs/withFetchData";
import { get_3_statistic } from '../../api/statisticApi';
import ECommerceStatusCard from '../ECommerceStatusCard';
import {Card} from 'antd'
const ECommerceStatusCardList = ({data}) => {
    const formatData = Object.entries(data).map(([key, value]) => ({ name: key, value }));

    console.log(formatData);
  return (
  
        <div className="flex gap-4 w-full justify-between">
            {formatData.map(data => (
              
                <ECommerceStatusCard type={data.name} key={data.name} data={data.value}/>
            ))}
        </div>

 
  )
}

export default withFetchData(ECommerceStatusCardList, get_3_statistic);