import moment from 'moment';
import 'moment/locale/nl-be';

export const getReadableDate = (date = new Date()) => {
  moment.locale('nl-be');
  return moment(date, 'DD/MM/YYYY').format('D MMMM YYYY');
};

export default moment;
