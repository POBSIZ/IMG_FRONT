/**
 *
 * @param { Date } _data
 * @param { boolean } _detail default: false
 * @param { boolean } _onlyDetail default: false
 * @returns { string }
 */
export const FormatDate = (
  _data,
  _detail = false,
  _onlyDetail = false,
): string => {
  if (_data === undefined) _data = new Date();
  const _dateObj = new Date(_data);

  const year = _dateObj.getFullYear();

  const month =
    _dateObj.getMonth() + 1 < 10
      ? `0${_dateObj.getMonth() + 1}`
      : _dateObj.getMonth() + 1;

  const date =
    _dateObj.getDate() < 10 ? `0${_dateObj.getDate()}` : _dateObj.getDate();

  const hour =
    _dateObj.getHours() < 10 ? `0${_dateObj.getHours()}` : _dateObj.getHours();

  const minute =
    _dateObj.getMinutes() < 10
      ? `0${_dateObj.getMinutes()}`
      : _dateObj.getMinutes();

  const fullDate = `${year}/${month}/${date} ${hour}:${minute}`;

  const onlyDetail = `${hour}:${minute}`;

  const onlyDate = `${year}/${month}/${date}`;

  return _detail ? fullDate : _onlyDetail ? onlyDetail : onlyDate;
};
