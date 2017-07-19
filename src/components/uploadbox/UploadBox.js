import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../redux/actions';

class UploadBox extends React.Component {
  componentDidMount() {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', e => {
      e.preventDefault();
      const images = Array.from(e.dataTransfer.files).filter(file => {
        return file.type.startsWith('image/') || file.type.startsWith('video/');
      });
      const file = images[0];
      this.props.uploadFile(file);
    });
  }

  render() {
    return (
      <div>
        {this.props.creation.photoURL &&
          <img src={this.props.creation.photoURL} alt="upload" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creation: state.creation
});

export default connect(mapStateToProps, { uploadFile })(UploadBox);
