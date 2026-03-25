import React from 'react';
import {
  NavbarContainer,
  Logo,
  ButtonGroup,
  PreviewButton,
  ExportButton,
} from './Navbar.styles';
import { PreviewIcon, ExportIcon } from '../icons/Icons';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>UI Builder</Logo>
      <ButtonGroup>
        <PreviewButton>
          <PreviewIcon />
          Preview
        </PreviewButton>
        <ExportButton>
          <ExportIcon />
          Export
        </ExportButton>
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
