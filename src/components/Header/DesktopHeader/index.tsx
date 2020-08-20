import React from 'react';

import { 
  Container, 
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Search" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Home</span>
            </button>
            <button>
              <NotificationIcon />
              <span>Notification</span>
            </button>
            <button>
              <ProfileCircle src="https://github.com/LucasReinaldo.png" />
              <span>Me <CaretDownIcon /></span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  )
}

export default DesktopHeader;