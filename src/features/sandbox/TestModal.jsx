import React from 'react';
import ModalWrapper from '../../app/common/modals/ModalManager';

const TestModal = ({ data }) => {
  return (
    <ModalWrapper size='mini' header='Test Modal'>
      <div>The data is: {data}</div>
    </ModalWrapper>
  );
};

export default TestModal;
