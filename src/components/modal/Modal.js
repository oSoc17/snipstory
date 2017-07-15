import React from 'react';
import Modal from 'react-modal';
import './Modal.css';

const StyledModal = ({
  isOpen = true,
  contentLabel = 'Modal',
  isClosable = false,
  onClose = () => null,
  actions,
  style,
  children,
  title,
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel={contentLabel}
      className={{ base: 'modal' }}
      overlayClassName={{ base: 'modal__overlay' }}
      {...props}
    >
      <div className="modal__main">
        <div className="modal__header">
          <h2 className="modal__title">
            {title}
          </h2>
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
      {actions &&
        actions.length > 0 &&
        <div className="modal__actions">
          {actions.map((action, i) =>
            <button
              key={i}
              className="button--flat modal__action"
              onClick={action.action}
            >
              {action.text}
            </button>
          )}
        </div>}
    </Modal>
  );
};

export default StyledModal;
