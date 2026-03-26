import React from 'react';
import {
  SidebarContainer,
  SidebarItem,
  SidebarTitle,
} from './Sidebar.styles';
import {
  NavbarSectionIcon,
  HeroSectionIcon,
  FeaturesSectionIcon,
  CTASectionIcon,
  FooterSectionIcon,
  CheckIcon,
} from '../icons/Icons';
import { useBuilder } from '../../../contexts/BuilderContext';

const Sidebar: React.FC = () => {
  const { activeComponent, setActiveComponent } = useBuilder();
  const sections = [
    { name: 'Navbar', icon: <NavbarSectionIcon /> },
    { name: 'Hero', icon: <HeroSectionIcon /> },
    { name: 'Features', icon: <FeaturesSectionIcon /> },
    { name: 'CTA', icon: <CTASectionIcon /> },
    { name: 'Footer', icon: <FooterSectionIcon /> },
  ];

  return (
    <SidebarContainer>
      <SidebarTitle>Components</SidebarTitle>
      {sections.map((section) => (
        <SidebarItem
          key={section.name}
          isActive={activeComponent === section.name}
          onClick={() => setActiveComponent(section.name)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
            {section.icon}
            {section.name}
          </div>
          {activeComponent === section.name && <CheckIcon style={{ color: '#3b82f6' }} />}
        </SidebarItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
