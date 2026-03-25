import React from 'react';
import {
  NavbarContainer,
  Logo,
  ButtonGroup,
  PreviewButton,
  ExportButton,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>UI Builder</Logo>
      <ButtonGroup>
        <PreviewButton>Preview</PreviewButton>
        <ExportButton>Export</ExportButton>
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
