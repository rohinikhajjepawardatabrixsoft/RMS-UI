import { colorList } from '../constants/strings/common/Constants';

const generateColorHexCode = (str: string) => {
  let hash = 0;
  // eslint-disable-next-line
  for (let i = 0; i < str.length; i++) {
    // eslint-disable-next-line
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash % colorList.length);
  return colorList[index];
};

export default generateColorHexCode;
