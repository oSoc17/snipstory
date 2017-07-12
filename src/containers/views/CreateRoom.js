import React from 'react';

class CreateRoom extends React.Component {
  // Room creation handled by next component => componentWillMount
  // --> firebase create a room and return that room identifier/key

  render() {
    return (
      <div>
        <form>
          <label htmlFor="roomId">Maak een nieuwe ruimte</label>
          <input type="submit" value="Maak" />
        </form>
      </div>
    );
  }
}

export default CreateRoom;
