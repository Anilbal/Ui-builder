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
  DropdownItemIcon,
  DropdownItemContent,
  DropdownItemTitle,
  DropdownItemDesc,
} from './Navbar.styles';
import {
  PreviewIcon,
  ExportIcon,
  ChevronDownIcon,
  NextJsIcon,
  ReactIcon,
  TailwindIcon,
} from '../icons/Icons';

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
      icon: <NextJsIcon />,
    },
    {
      title: 'React',
      description: 'Clean Vite-based React starter project.',
      icon: <ReactIcon />,
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework configuration.',
      icon: <TailwindIcon />,
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
            <ChevronDownIcon style={{ marginLeft: '4px', opacity: 0.7 }} />
          </ExportButton>
          {isDropdownOpen && (
            <DropdownMenu>
              {exportOptions.map((option) => (
                <DropdownItem key={option.title}>
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
