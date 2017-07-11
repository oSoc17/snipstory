import React from 'react';
import { RoomIdGenerator } from '../../helpers/RoomIdGenerator';

class CreateRoom extends React.Component {
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
