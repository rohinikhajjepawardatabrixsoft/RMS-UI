const convertDropdownOptions = (array: any[]) => {
  return array?.reduce((arr: { value: string; label: string }[], item: string) => {
    arr.push({ value: item, label: item });
    return arr;
  }, []);
};
export default convertDropdownOptions;
