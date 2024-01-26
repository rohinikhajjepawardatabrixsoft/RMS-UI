import moment from 'moment';
import { MONTH_ARRAY } from '../../constants/strings/common/Constants';

const DateConversion = (date: string | null): string => {
  const convertedDate = new Date(date || '--');
  if (String(convertedDate) === 'Invalid Date') return '--';
  return convertedDate.toLocaleDateString('en-GB' || '');
};
export default DateConversion;

export const getEventTimings = (slotDetails: {
  slotDay?: string;
  slotStartTime: string;
  slotEndTime: string;
  slotTimezone?: string;
}): string => {
  const { slotDay, slotEndTime, slotStartTime, slotTimezone } = slotDetails;
  const endTime = moment(slotEndTime, ['HH:mm']).format('h:mm A');
  const startTime = moment(slotStartTime, ['HH:mm']).format('h:mm A');
  if (!slotDay && !startTime) {
    return '--';
  }
  return `${slotDay ? `${slotDay} ,` : ''} ${startTime || ''} ${
    startTime && endTime ? `to ${endTime}` : ''
  } ${startTime && endTime && slotTimezone ? slotTimezone : ''} `;
};

export const formatDate = (dateString: string | Date) => {
  const date = new Date(dateString);
  const monthName = MONTH_ARRAY[date.getMonth()];
  const eventDate = date.getDate();
  const year = date.getFullYear();
  return `${monthName} ${eventDate} , ${year}`;
};
