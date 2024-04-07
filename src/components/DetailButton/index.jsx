import { useState } from 'react'
import AppModal from '../AppModal';

const DetailButton = ({children}) => {
    const [isOpen, setIsOpenDetail] = useState(false);
  return (
    <>
        <span onClick={()=>setIsOpenDetail(true)} className='font-bold cursor-pointer hover:text-blue-700 text-blue-600'>Detail</span>
        <AppModal isOpen={isOpen} setIsOpen={setIsOpenDetail} width={800}>
            {children}
        </AppModal>
    </>
  )
}

export default DetailButton