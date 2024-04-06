import { useState } from 'react'
import AppModal from '../AppModal';
import TripDetail from '../TripDetail';

const DetailButton = ({data}) => {
    const [isOpen, setIsOpenDetail] = useState(false);
  return (
    <>
        <span onClick={()=>setIsOpenDetail(true)} className='font-bold cursor-pointer hover:text-blue-700 text-blue-600'>Detail</span>
        <AppModal isOpen={isOpen} setIsOpen={setIsOpenDetail} width={800}>
            <TripDetail data={data}/>
        </AppModal>
    </>
  )
}

export default DetailButton