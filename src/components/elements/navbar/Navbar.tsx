import React, { useState, useRef, useEffect } from 'react';
import JSZip from 'jszip';
import {
  NavbarContainer,
  Logo,
  ButtonGroup,
  PreviewButton,
  ExportButton,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  DropdownItemIcon,
  DropdownItemContent,
  DropdownItemTitle,
  DropdownItemDesc,
} from './Navbar.styles';
import {
  PreviewIcon,
  ExportIcon,
  ChevronDownIcon,
  // NextJsIcon,
  ReactIcon,
  TailwindIcon,
} from '../icons/Icons';
import { useBuilder } from '../../../contexts/BuilderContext';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { navbarData } = useBuilder();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handlePreview = () => {
    localStorage.setItem('navbarPreviewData', JSON.stringify(navbarData));
    window.open('/preview', '_blank');
  };

  const handleExportReact = async () => {
    const zip = new JSZip();
    const componentsFolder = zip.folder('components');
    const navbarFolder = componentsFolder?.folder('navbar');

    const stylesContent = `import styled from 'styled-components';

export const NavbarWrapper = styled.nav\`
  width: 100%;
  background-color: #0a0a0a;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
\`;

export const Brand = styled.div\`
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
\`;

export const NavLinks = styled.div\`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
\`;

export const NavLink = styled.a\`
  font-size: 0.875rem;
  font-weight: 500;
  color: #a1a1aa;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
\`;

export const ActionButton = styled.button\`
  background-color: #ffffff;
  color: #000000;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
\`;
`;

    const componentContent = `import React from 'react';
import {
  NavbarWrapper,
  Brand,
  NavLinks,
  NavLink,
  ActionButton,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <NavbarWrapper>
      <Brand>${navbarData.brand}</Brand>
      <NavLinks>
        ${navbarData.links
          .map(
            (link) => `
        <NavLink href="${link.href}">
          ${link.label}
        </NavLink>`
          )
          .join('')}
      </NavLinks>
      <ActionButton>${navbarData.ctaText}</ActionButton>
    </NavbarWrapper>
  );
};

export default Navbar;
`;

    navbarFolder?.file('Navbar.styles.ts', stylesContent);
    navbarFolder?.file('Navbar.tsx', componentContent);

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'navbar-component.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const exportOptions = [
    // {
    //   title: 'Next.js',
    //   description: 'Production-ready React framework with SSR.',
    //   icon: <NextJsIcon />,
    // },
    {
      title: 'React',
      description: 'Clean Vite-based React starter project.',
      icon: <ReactIcon />,
      onClick: handleExportReact,
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework configuration.',
      icon: <TailwindIcon />,
    },
  ];

  return (
    <NavbarContainer>
      <Logo>ui builder</Logo>
      <ButtonGroup>
        <PreviewButton onClick={handlePreview}>
          <PreviewIcon />
          Preview
        </PreviewButton>
        <DropdownContainer ref={dropdownRef}>
          <ExportButton onClick={toggleDropdown}>
            <ExportIcon />
            Export
            <ChevronDownIcon style={{ marginLeft: '4px', opacity: 0.7 }} />
          </ExportButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {exportOptions.map((option) => (
                <DropdownItem 
                  key={option.title} 
                  onClick={option.onClick}
                  style={{ cursor: (option as any).onClick ? 'pointer' : 'default' }}
                >
                  <DropdownItemIcon>{option.icon}</DropdownItemIcon>
                  <DropdownItemContent>
                    <DropdownItemTitle>{option.title}</DropdownItemTitle>
                    <DropdownItemDesc>{option.description}</DropdownItemDesc>
                  </DropdownItemContent>
                </DropdownItem>
              ))}
            </DropdownMenu>
          )}
        </DropdownContainer>
      </ButtonGroup>
    </NavbarContainer>
  );
};

export default Navbar;
