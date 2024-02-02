import React, { useState } from 'react';
import icon from '../images/icons.svg';
import avatarLight from '../images/userAvatarLight.jpg';
import avatarDark from '../images/userAvatarDark.jpg';
import MainModal from '../mainModal/MainModal';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material';
import {
  BurgerIcon,
  UserImage,
  Appbar,
  ToolBar,
  BurgerButton,
  HeaderWrap,
  UserText,
  UserButton,
} from './Header.styled';

const Header = ({ click }) => {
  const user = useSelector;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = user.theme;

  const themeObj = useTheme();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentUserData = {
    avatar: user.avatar,
    login: user.name,
    email: user.email,
  };

  return (
    <Appbar
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <ToolBar>
        <BurgerButton aria-label="open drawer" edge="start" onClick={click}>
          <BurgerIcon theme={themeObj}>
            <use href={icon + '#icon-menu_40px-1'}></use>
          </BurgerIcon>
        </BurgerButton>
        <HeaderWrap>
          <UserText
            variant="body2"
            sx={{
              color: 'text.primary',
            }}
          >
            {user.name}
          </UserText>
          <UserButton onClick={openModal} aria-label="open drawer">
            {theme === 'dark' ? (
              <UserImage
                src={currentUserData.avatar || avatarDark}
                alt="Avatar"
              />
            ) : (
              <UserImage
                src={currentUserData.avatar || avatarLight}
                alt="Avatar"
              />
            )}
          </UserButton>
          <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
          </MainModal>
        </HeaderWrap>
      </ToolBar>
    </Appbar>
  );
};

export default Header;