import React from 'react';
import { connect } from 'react-redux';
import { sendCreation } from '../../../redux/actions';
import UploadBox from '../../../components/uploadbox/UploadBox';
import Button from '../../../components/button/Button';
import StapLogo from './assets/stap04.svg';
import Navbar from '../../../components/nav/Navbar';
import Footer from '../../../components/footer/Footer';

import StepIndicator from '../../../components/step-indicator/StepIndicator';
import FloatingSteps from '../../../components/step-indicator/FloatingSteps';

class Room extends React.Component {
  render() {
    const { creation, sendCreation } = this.props;

    return (
      <div className="share page">
        <Navbar />
        <StepIndicator
          step="4"
          title="Deel je snipper"
          description="Deel je creatie met de wereld! Upload een foto of video van je knutselwerk"
          image={StapLogo}
        />
        <div className="container">
          <UploadBox />
          {this.props.creation.photoURL &&
            !this.props.creation.isSubmitted &&
            <Button
              onClick={_ => {
                sendCreation();
              }}
            >
              Verzend
            </Button>}
          {creation.isSubmitted &&
            <Button to={'/snippers/' + creation.id}>
              Ga naar jou snipper!
            </Button>}
          <FloatingSteps activeStep={3} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  creation: state.creation
});

export default connect(mapStateToProps, {
  sendCreation
})(Room);
