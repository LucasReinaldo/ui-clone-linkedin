import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://github.com/LucasReinaldo.png" />
      <SearchInput placeholder="Search" />
      <MessageIcon />
    </Container>
  )
}

export default MobileHeader;