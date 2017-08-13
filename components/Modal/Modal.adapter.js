// @flow

import Modal from './Modal.js';

const ModalAdapter = {
  close(inst) {
    inst._handleClose();
  }
};

// $FlowIssue
Modal.__ADAPTER__ = ModalAdapter;

export default Modal;
