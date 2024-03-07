import { Form, Button, Card, Divider, Tabs } from "antd";
import FormUploadButton from "@components/FormUploadButton";
import FormList from "@components/FormList";
import FormInput from "../../components/FormInput";
import FormInputNumber from "../../components/FormInputNumber";

import FormTextArea from "../../components/FormTextArea";
import FormSelect from "../../components/FormSelect";
import { isAdmin } from "../../utils/getCurrentUserRole";
import { useContext, useState } from "react";
import AppModal from "@components/AppModal";
import CreatingAttribute from "./components/CreatingAttribute";
import { useFetch } from "@hooks/api-hooks";
import { get_all_types } from "../../api/typesApi";
import FormSelectType from "./components/FormSelectType";
import {
  CreatingProductContext,
  CreatingProductProvider,
  useCreatingProductValues,
} from "./CreatingProductContext";
import CreatingProductForm from "./components/CreatingProductForm";

const { TabPane } = Tabs;

const CreatingProduct = () => {
  return (
    <CreatingProductProvider>
      <CreatingProductForm />
    </CreatingProductProvider>
  );
};

export default CreatingProduct;
