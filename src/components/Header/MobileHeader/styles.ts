import styled from 'styled-components';
import { IoMdText } from 'react-icons/io'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  align-items: center;
  background: var(--color-link);
  display: flex;
  height: 48px;
  justify-content: space-between;
  padding: 0 16px;

  @media(min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  background: var(--color-input);
  border-radius: 2px;
  border: none;
  color: var(--color-black);
  font-size: 14px;
  margin-left: 16px;
  outline: none;
  padding: 7.5px 8px;
  width: 100%;
  
  &:focus {
    background: var(--color-white);
  }
`;

export const MessageIcon = styled(IoMdText)`
  border-radius: 4px;
  color: var(--color-white);
  flex-shrink: 0;
  height: 24px;
  margin-left: 17px;
  width: 24px;
`;
