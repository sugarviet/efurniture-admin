import { useState } from 'react'
import AppModal from '../AppModal';
import { PlusCircleFilled } from '@ant-design/icons';
import AddNewVariationForm from '../AddNewVariationForm';

const AddNewVariationButton = ({ id }) => {
    const [openAddNewVariation, setOpenAddNewVariation] = useState(false);

    return (
        <div>
            <span className='hover:cursor-pointer text-blue-600 text-lg' onClick={() => setOpenAddNewVariation(true)}>
                <PlusCircleFilled />
            </span>


            <AppModal isOpen={openAddNewVariation} setIsOpen={setOpenAddNewVariation}>
                <AddNewVariationForm id={id} />
            </AppModal>
        </div>
    )
}


export default AddNewVariationButton