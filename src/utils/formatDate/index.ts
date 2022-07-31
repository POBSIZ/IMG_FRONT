export const FormatDate = (_data) => {
  if (_data === undefined) _data = new Date();
  const _dateObj = new Date(_data).toISOString();
  const dateObj = new Date(_dateObj);
  return `${dateObj.getFullYear()}/${dateObj.getMonth()}/${dateObj.getDay()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
};
