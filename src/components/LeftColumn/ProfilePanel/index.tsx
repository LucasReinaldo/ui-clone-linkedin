import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://github.com/LucasReinaldo.png"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Lucas Melo</h1>
        <h2>Open to Work</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Who viewed your profile</span>
          <span className="value">114</span>
        </div>
        <div className="key-value">
          <span className="key">Views of your post</span>
          <span className="value">1,663</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
