import React from 'react';
import Button from '../button/Button';
import { User } from 'react-feather';
import './WorkTogether.css';

import bednet from './assets/bednet.png';

class WorkTogether extends React.Component {
  render() {
    const {
      users,
      expanded,
      showToast,
      onExpand,
      changeUsernameCurrentUser
    } = this.props;
    const usersList = Object.keys(users)
      .map(key => users[key])
      .filter(user => user.trim().length);
    const shouldExpand = expanded || usersList.length > 0;
    return (
      <div className="work-together">
        {shouldExpand
          ? <div className="work-together__inner work-together__inner--expanded">
              <input
                type="text"
                value={window.location.href}
                readOnly
                ref={inviteInput => {
                  this.inviteInput = inviteInput;
                }}
                onClick={e => e.target.select()}
                className="form-field__input"
              />
              <p className="work-together__text">
                Stuur deze link door naar je vrienden. Als jullie allemaal
                dezelfde link gebruiken, dan kunnen jullie vanop verschillende
                computers zien wat de ander doet.
              </p>
              <input
                type="text"
                placeholder="Vul je naam in"
                className="form-field__input"
                onChange={changeUsernameCurrentUser}
              />
              {usersList.length > 0 &&
                <div className="work-together__users">
                  <h5>Mensen op deze pagina</h5>
                  {usersList.map(user =>
                    <div key={user}>
                      <User />
                      {user}
                    </div>
                  )}
                </div>}
              <Button
                size="small"
                className="work-together__button"
                inverted
                onClick={_ => {
                  this.inviteInput.select();
                  document.execCommand('copy');
                  showToast({
                    text: `De link is gekopieerd naar jouw klembord, stuur het naar je vrienden!`
                  });
                }}
              >
                Kopiëer link
              </Button>
            </div>
          : <div className="work-together__inner work-together__inner--closed">
              <p className="work-together__text">
                Werk samen met je vrienden op verschillende computers
              </p>
              <Button
                className="work-together__button"
                size="small"
                inverted
                onClick={onExpand}
              >
                Werk samen
              </Button>
            </div>}
        <div className="bednet-logo">
          <img className="bednet-logo__img" src={bednet} alt="Bednet logo" />
        </div>
      </div>
    );
  }
}
export default WorkTogether;
