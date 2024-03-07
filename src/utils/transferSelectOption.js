export const transferSelectOption = (data, label, value) => {
    return data?.map((item) => ({
      label: item[label],
      value: item[value],
    }));
  };