import React from 'react';
import { connect } from 'react-redux';
import { uploadFile } from '../../redux/actions';

class UploadBox extends React.Component {
  componentDidMount() {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', e => {
      e.preventDefault();
      const images = Array.from(e.dataTransfer.files).filter(file => {
        return file.type.startsWith('image/');
      });
      const imageFile = images[0];
      // upload
      this.props.uploadFile(imageFile);
    });
  }

  render() {
    return (
      <div>
        {this.props.upload.downloadURLs &&
          <img src={this.props.upload.downloadURLs[0]} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  upload: state.upload
});

export default connect(mapStateToProps, { uploadFile })(UploadBox);
