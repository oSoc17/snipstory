import React from 'react';
import { STATUS } from '../../constants';
import { XCircle, CheckCircle, AlertCircle, Info } from 'react-feather';

const StatusIcon = ({ status = STATUS.SUCCESS, color }) => {
  switch (status) {
    case STATUS.ERROR:
      return <XCircle color={color} />;
    case STATUS.WARNING:
      return <AlertCircle color={color} />;
    case STATUS.INFO:
      return <Info color={color} />;
    default:
      return <CheckCircle color={color} />;
  }
};

export default StatusIcon;
