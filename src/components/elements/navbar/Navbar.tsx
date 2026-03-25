import React, { useState, useRef, useEffect } from 'react';
import {
  NavbarContainer,
  Logo,
  ButtonGroup,
  PreviewButton,
  ExportButton,
  DropdownContainer,
  DropdownMenu,
  DropdownItem,
  DropdownItemTitle,
  DropdownItemDesc,
} from './Navbar.styles';
import { PreviewIcon, ExportIcon } from '../icons/Icons';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

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
    {
      title: 'Next.js',
      description: 'Production-ready React framework with SSR.',
    },
    {
      title: 'React',
      description: 'Clean Vite-based React starter project.',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework configuration.',
    },
  ];

  return (
    <NavbarContainer>
      <Logo>UI Builder</Logo>
      <ButtonGroup>
        <PreviewButton>
          <PreviewIcon />
          Preview
        </PreviewButton>
        <DropdownContainer ref={dropdownRef}>
          <ExportButton onClick={toggleDropdown}>
            <ExportIcon />
            Export
          </ExportButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {exportOptions.map((option) => (
                <DropdownItem key={option.title}>
                  <DropdownItemTitle>{option.title}</DropdownItemTitle>
                  <DropdownItemDesc>{option.description}</DropdownItemDesc>
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
