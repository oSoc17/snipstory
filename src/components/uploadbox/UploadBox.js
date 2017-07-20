import React from 'react';
import { connect } from 'react-redux';
import {
  uploadFile,
  addDescriptionToCreation,
  addCreatorsToCreation
} from '../../redux/actions';

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
      <div className="upload container">
        <h2>Voeg een foto of video van jouw snipper toe</h2>

        <div className="form-group">
          <input
            type="file"
            id="creationUpload"
            name="creationUpload"
            onChange={e => {
              this.props.uploadFile(e.target.files[0]);
            }}
          />
          <label htmlFor="creationUpload">+</label>
        </div>
        {this.props.creation.photoURL &&
          <img src={this.props.creation.photoURL} alt="upload" />}
        <div className="form-group">
          <label htmlFor="creators">Vul jullie naam in: </label>
          <br />
          <input
            type="text"
            name="creators"
            id="creators"
            onChange={this.props.addCreatorsToCreation}
          />
        </div>
        <div className="form-group">
          <label htmlFor="creation-description">
            Wil je iets over je snipper schrijven?{' '}
          </label>
          <br />
          <textarea
            name="creation-description"
            onChange={this.props.addDescriptionToCreation}
            id="creation-description"
            cols="30"
            rows="10"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creation: state.creation
});

export default connect(mapStateToProps, {
  uploadFile,
  addDescriptionToCreation,
  addCreatorsToCreation
})(UploadBox);
