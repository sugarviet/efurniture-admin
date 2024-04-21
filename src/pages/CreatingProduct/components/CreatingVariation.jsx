import FormList from "../../../components/FormList";
import { Divider } from "antd";
import FormSelectColor from "../../../components/FormSelectColor";
import FormInputNumber from "../../../components/FormInputNumber";
import FormSelect from "@components/FormSelect";

const variationSelect = [{ label: "color", value: "color" }];
const CreatingVariation = () => {
  return (
    <FormList
      initialValues={[{ name: "color" }]}
      isAddMore={false}
      name="variation"
    >
      {({ name, restField, remove }, index) => (
        <div className="w-full">
          <div className="flex justify-between my-2"></div>
          <FormSelect
            {...restField}
            label="Name"
            name={[name, "name"]}
            options={variationSelect}
            required
          />

          <div>
            <FormList
              initialValues={[{ value: undefined, sub_price: 10000 }]}
              name={[name, "properties"]}
            >
              {({ name, restField, remove }, index) => (
                <div className="w-full">
                  <div className="flex justify-between my-2">
                    {index === 0 ? null : (
                    <p
                      onClick={() => remove(name)}
                      className="cursor-pointer underline hover:text-red-700 text-red-500"
                    >
                      Remove
                    </p>
                    )}
                  </div>

                  <FormSelectColor
                    {...restField}
                    name={[name, "value"]}
                    className="w-full"
                    label="Value"
                    required
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
  );
};

export default CreatingVariation;
