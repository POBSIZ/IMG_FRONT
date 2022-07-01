import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { SetStateType } from 'Types';

export interface AddressPropsType {
  setZipCode: SetStateType;
  setAddress: SetStateType;
}

const Address: React.FC<AddressPropsType> = (props, {}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    props.setZipCode(data.zonecode);
    props.setAddress(fullAddr);
    setIsOpen(false);
  };
  return (
    <>
      {isOpen ? (
        <DaumPostcode autoClose={false} onComplete={onCompletePost} />
      ) : null}
    </>
  );
};

export default Address;
