/**
 *
 * @param { Date } _data
 * @param { boolean } _detail default: false
 * @returns { void }
 */
export const FormatDate = (_data, _detail = false) => {
  if (_data === undefined) _data = new Date();
  const _dateObj = new Date(_data).toISOString();
  const dateObj = new Date(_dateObj);

  const fullDate = `${dateObj.getFullYear()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getDay()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;

  const onlyDate = `${dateObj.getFullYear()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getDay()}`;

  return _detail ? fullDate : onlyDate;
};
