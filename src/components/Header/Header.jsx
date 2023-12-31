import { useEffect, useState } from 'react';
import menu from 'images/sprite.svg';
import { MobileMenu } from 'components/Sidebar/MobileMenu/MobileMenu';
import { MobileMenuBox } from 'components/Sidebar/MobileMenu/MobileMenu.styled';
import { SwitchTheme } from 'components/ThemeStatus/SwitcherTheme/SwitchTheme';
import { Header, HeaderSvg, Logo, LogoBox, MovieIcon } from './Header.styled';
import Language from 'components/Language/Language';
import { openModalWindow } from "../../hooks/ModalWindow";
import { ModalWindow } from '../ModalWindow/ModalWindow'

export const HeaderComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState('true');
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < scrollPos;

      (isScrollingUp || currentScrollPos === 0) ? setVisible('true'): setVisible('false');
      setScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Header isvisible={visible}>

      <LogoBox href="/brand-maze" aria-label="logo company">
        <Logo>Brand maze</Logo>
      </LogoBox>
      <MovieIcon onClick={openModalWindow}/>
      <div style={{display:'flex',justifyContent:'end', position:'relative',width:'100%'}}>
      <Language />
      <SwitchTheme />
      </div>
      <HeaderSvg width="24" height="24" onClick={toggleMenu}>
        <use href={menu + '#menu'}></use>
      </HeaderSvg>
      <MobileMenuBox className={`collapsed ${isOpen ? 'is-expanded' : ''}`}>
        <MobileMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          setIsOpen={setIsOpen}
        />
      </MobileMenuBox>
    </Header>
    <ModalWindow/>
    </>
  );
};
