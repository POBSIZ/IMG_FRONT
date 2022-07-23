export const FormatDate = (_data) => {
  const _dateObj = new Date(_data).toISOString();
  const dateObj = new Date(_dateObj);
  return `${dateObj.getFullYear()}/${dateObj.getMonth()}/${dateObj.getDay()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
};
