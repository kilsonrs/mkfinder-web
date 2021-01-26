import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen(): void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, setIsOpen, children }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '4px',
          border: 'none',
          padding: '24px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.70)',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
