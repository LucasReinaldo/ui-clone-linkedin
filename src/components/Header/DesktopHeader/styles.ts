import styled, { css } from 'styled-components';
import {
  IoIosHome,
  IoIosNotifications,
  IoMdArrowDropdown
} from 'react-icons/io';

import { GrLinkedin } from 'react-icons/gr';

const generalIconCss = css`
  width: 24px;
  height: 24px;
`;

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  background: var(--color-header);
  padding: 0 30px;
  display: none;

  @media(min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 52px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1128px;

  .left, .right nav {
    align-items: center;
    display: flex;
  }

  .right nav {
    height: 100%;
  
    button {
      align-items: center;
      background: none;
      border: 0;
      color: var(--color-icons);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100%;
      min-width: 90px;
      outline: 0;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  background: #fff;
  border-radius: 4px;
  color: var(--color-linkedin);
  flex-shrink: 0;
  height: 34px;
  width: 34px;
`;

export const SearchInput = styled.input`
  background: var(--color-input);
  border-radius: 2px;
  border: none;
  color: var(--color-black);
  font-size: 14px;
  margin-left: 12px;
  outline: none;
  padding: 7.5px 8px;
  width: 280px;
  
  &:focus {
    background: var(--color-white);
  }
`;

export const HomeIcon = styled(IoIosHome)`
  ${generalIconCss};
`;

export const NotificationIcon = styled(IoIosNotifications)`
  ${generalIconCss};
`;

export const ProfileCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons)
`;

export const CaretDownIcon = styled(IoMdArrowDropdown)`
  width: 16px;
  height: 16px;
`;
