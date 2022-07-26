export const parseDate = (date: string): string => {
  if (!date) {
    return '';
  }

  const dateValue = new Date(date);
  let minutes = `${dateValue.getMinutes()}`;

  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }

  return `${dateValue.toDateString()}, ${dateValue.getHours()}:${minutes} ${
    dateValue.getHours() > 11 ? 'pm' : 'am'
  }`;
};
