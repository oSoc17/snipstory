import React from 'react';
import { connect } from 'react-redux';
import {
  uploadFile,
  addDescriptionToCreation,
  addCreatorsToCreation
} from '../../redux/actions';
import './UploadBox.css';
import Snipper from '../spinner/Spinner';

class UploadBox extends React.Component {
  render() {
    return (
      <div className="upload container">
        {this.props.creation.uploading
          ? <Snipper />
          : <div>
              {this.props.creation.photoURL
                ? <div>
                    {this.props.creation.fileType === 'video'
                      ? <video
                          className="img-fluid"
                          autoPlay
                          controls
                          src={this.props.creation.photoURL}
                        />
                      : <img
                          className="img-fluid"
                          src={this.props.creation.photoURL}
                          alt="upload"
                        />}
                  </div>
                : <div>
                    <input
                      type="file"
                      id="creationUpload"
                      name="creationUpload"
                      onChange={e => {
                        this.props.uploadFile(e.target.files[0]);
                      }}
                    />
                    <label id="upload-button" htmlFor="creationUpload">
                      Upload je snipper!
                    </label>
                  </div>}
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
            Wil je iets over je snipper schrijven?
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
