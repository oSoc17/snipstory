import React from 'react';
import { connect } from 'react-redux';
import {
  uploadFile,
  addDescriptionToCreation,
  addCreatorsToCreation
} from '../../redux/actions';
import Button from '../button/Button';
import './UploadBox.css';

class UploadBox extends React.Component {
  componentDidMount() {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', e => e.preventDefault());
    document
      .getElementById('creationUploadBox')
      .addEventListener('dragenter', e => {
        e.preventDefault();
        e.target.style.borderColor = 'green';
      });
    document
      .getElementById('creationUploadBox')
      .addEventListener('dragleave', e => {
        e.preventDefault();
        e.target.style.borderColor = 'lightgrey';
      });
    document.getElementById('creationUploadBox').addEventListener('drop', e => {
      e.preventDefault();
      e.target.style.borderColor = 'lightgrey';
      const files = Array.from(e.dataTransfer.files).filter(file => {
        return file.type.startsWith('image/') || file.type.startsWith('video/');
      });
      const file = files[0];
      this.props.uploadFile(file);
    });
  }

  render() {
    return (
      <div className="upload container">
        {this.props.creation.photoURL
          ? <div>
              {this.props.creation.fileType === 'image' &&
                <img src={this.props.creation.photoURL} alt="upload" />}
              {this.props.creation.fileType === 'video' &&
                <video autoPlay controls src={this.props.creation.photoURL} />}
            </div>
          : <div className="form-group uploadbox" id="creationUploadBox">
              <input
                type="file"
                id="creationUpload"
                name="creationUpload"
                onChange={e => {
                  console.log('Update started...');
                  this.props.uploadFile(e.target.files[0]);
                }}
              />
              {this.props.creation.error
                ? <label className="upload-error" htmlFor="creationUpload">
                    +
                  </label>
                : <label htmlFor="creationUpload">+</label>}
              <span>
                Sleep hier je gemaakte snipper of klik op de bovenstaande knop
              </span>
            </div>}
        <div className="form-group">
          <label htmlFor="creators">Vul jullie naam in: </label>
          <br />
          <input
            style={{ padding: '1em' }}
            className="form-field__input"
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
            className="form-field__input"
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
