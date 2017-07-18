import React from 'react';
import Button from '../button/Button';

class Class extends React.Component {
  render() {
    const { name, code, showToast } = this.props;
    return (
      <div className="teacher-class" style={{ outline: '1px blue solid' }}>
        <div className="teacher-classe__name">
          {name}
        </div>
        <input
          ref={codeInput => {
            this.codeInput = codeInput;
          }}
          type="text"
          readOnly
          value={code}
          onClick={e => e.target.select()}
        />
        <Button
          onClick={_ => {
            this.codeInput.select();
            document.execCommand('copy');
            showToast({
              text: `"${this.codeInput.value}" is gekopieerd naar jouw klembord`
            });
          }}
        >
          Kopieer code
        </Button>
      </div>
    );
  }
}

export default Class;
