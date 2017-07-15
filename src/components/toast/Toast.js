import React from 'react';
import './Toast.css';
import { STATUS, STATUS_COLORS } from '../../constants';
import StatusIcon from './StatusIcon';

class Toast extends React.Component {
  state = {
    expired: false
  };
  componentDidMount() {
    const { timeout = 3000 } = this.props;
    this.toastRef.addEventListener('animationend', e => {
      if (e.animationName === 'slide-out') {
        this.props.destroyToast();
      }
    });

    setTimeout(() => {
      this.setState({ expired: true });
    }, timeout);
  }

  render() {
    const {
      text = '',
      status = STATUS.SUCCESS,
      actionText,
      onAction,
      style
    } = this.props;

    const color = STATUS_COLORS[status];

    return (
      <div
        ref={toast => {
          this.toastRef = toast;
        }}
        className={`toast ${this.state.expired ? 'toast--fade-out' : ''}`}
        style={style}
      >
        <div className="toast__text">
          <StatusIcon color={color} status={status} />
          <div>
            {text}
          </div>
        </div>
        {actionText &&
          onAction &&
          <div className="toast__action">
            <button
              style={{ color }}
              onClick={onAction}
              className="button--flat"
            >
              {actionText}
            </button>
          </div>}
      </div>
    );
  }
}

export default Toast;
