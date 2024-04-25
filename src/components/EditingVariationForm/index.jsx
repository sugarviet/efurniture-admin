import FormList from '../FormList';
import { Divider } from 'antd';
import FormSelectColor from '../FormSelectColor';
import FormInputNumber from '../FormInputNumber';
import FormSelect from "@components/FormSelect";
import FormInput from '../FormInput';
import PropTypes from "prop-types";

const variationSelect = [{ label: 'color', value: 'color' }]
const EditingVariationForm = ({ data }) => {
    console.log(data);
    const initialVariationLength = data.variation[0].properties.length;

    console.log(initialVariationLength)
    return (

        <FormList
            initialValues={[{ name: 'color' }]}
            isAddMore={false}
            name="variation"
        >
            {({ name, restField, remove }, index) => (
                <div className="w-full">
                    <div className="flex justify-between my-2">
                        <p className="text-base">Variations</p>

                    </div>
                    <FormSelect
                        {...restField}
                        label="Name"
                        name={[name, "name"]}
                        options={variationSelect}
                        required
                    />


                    <div>
                        <FormList
                            isAddMore={false}
                            name={[name, "properties"]}
                        >

                            {({ name, restField, remove }, index) => (
                                <div className="w-full">
                                    <div className="flex justify-between my-2">
                                        {index <= initialVariationLength ? null : <p
                                            onClick={() => remove(name)}
                                            className="cursor-pointer underline hover:text-red-700 text-red-500"
                                        >
                                            Remove
                                        </p>}

                                    </div>

                                    <FormInput name={[name, 'propertyId']} className='w-full'
                                        inputType='hidden'
                                        noStyle={true}
                                        label="propertyId" />
                                    <FormSelectColor
                                        {...restField}
                                        name={[name, "value"]}
                                        className="w-full"
                                        label="Value"
                                        required
                                        disabled={index <= initialVariationLength}


                                    />
                                    <div className="">
                                        <FormInputNumber
                                            {...restField}
                                            label="Sub Price"
                                            name={[name, "sub_price"]}
                                            prefix="VND"
                                            required
                                            message="Please enter the discount of ammount"
                                            placeholder="Enter discount ammount"
                                            className="w-full"
                                            min="0"

                                        />

                                    </div>

                                    <Divider dashed />
                                </div>
                            )}
                        </FormList>
                    </div>


                    <Divider dashed />
                </div>
            )}
        </FormList>
    )
}

EditingVariationForm.propTypes = {
    data: PropTypes.object,
};


export default EditingVariationForm
