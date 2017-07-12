import React from 'react';

class Room extends React.Component {
  render() {
    const { room } = this.props;
    return (
      <div className="room">
        <div className="story-information">
          <img src="" alt={'name'} />
          <h1>
            {'name'}
          </h1>
        </div>
        <div className="modules">
          {room.modules.map(module => {
            switch (module.contentType) {
              case 'image':
                return <div>module</div>;
              case 'imagequiz':
                return <div />;
              case 'map':
                return <div />;
              case 'quiz':
                return <div />;
              case 'searchex':
                return <div />;
              case 'textblock':
                return <div />;
              case 'video':
                return <div />;
              case 'youtube':
                return <div />;
              default:
                <div />;
            }
          })}
        </div>
      </div>
    );
  }
}
