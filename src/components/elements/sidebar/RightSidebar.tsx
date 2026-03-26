import React from 'react';
import {
  RightSidebarContainer,
  SidebarHeader,
  HeaderTitle,
  Badge,
  ScrollArea,
  PropertySection,
  SectionLabel,
  InputWrapper,
  Input,
  IconButton,
  Footer,
} from './RightSidebar.styles';
import { TextIcon, ListIcon, TrashIcon, PlusIcon } from '../icons/Icons';
import { useBuilder } from '../../../contexts/BuilderContext';

const RightSidebar: React.FC = () => {
  const { activeComponent, navbarData, setNavbarData } = useBuilder();

  if (!activeComponent) {
    return (
      <RightSidebarContainer>
        <SidebarHeader>
          <HeaderTitle>Properties</HeaderTitle>
        </SidebarHeader>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
          Select a component to edit its properties
        </div>
      </RightSidebarContainer>
    );
  }

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavbarData(prev => ({ ...prev, brand: e.target.value }));
  };

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...navbarData.links];
    newLinks[index] = { ...newLinks[index], label: value };
    setNavbarData(prev => ({ ...prev, links: newLinks }));
  };

  const deleteLink = (index: number) => {
    const newLinks = navbarData.links.filter((_, i) => i !== index);
    setNavbarData(prev => ({ ...prev, links: newLinks }));
  };

  const addLink = () => {
    setNavbarData(prev => ({
      ...prev,
      links: [...prev.links, { label: 'New Link', href: '#' }]
    }));
  };

  const handleCTAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavbarData(prev => ({ ...prev, ctaText: e.target.value }));
  };

  return (
    <RightSidebarContainer>
      <SidebarHeader>
        <HeaderTitle>Properties</HeaderTitle>
        <Badge>{activeComponent}</Badge>
      </SidebarHeader>

      {activeComponent === 'Navbar' && (
        <ScrollArea>
          <PropertySection>
            <SectionLabel>
              <TextIcon /> Brand Name
            </SectionLabel>
            <Input 
              value={navbarData.brand} 
              onChange={handleBrandChange}
            />
          </PropertySection>

          <PropertySection>
            <SectionLabel>
              <ListIcon /> Navigation Links
            </SectionLabel>
            {navbarData.links.map((link, index) => (
              <InputWrapper key={index}>
                <Input 
                  value={link.label} 
                  onChange={(e) => handleLinkChange(index, e.target.value)}
                />
                <IconButton onClick={() => deleteLink(index)}>
                  <TrashIcon />
                </IconButton>
              </InputWrapper>
            ))}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem', 
                color: '#3b82f6', 
                fontSize: '0.875rem',
                cursor: 'pointer',
                marginTop: '0.5rem',
                padding: '0.25rem'
              }}
              onClick={addLink}
            >
              <PlusIcon style={{ width: '14px', height: '14px' }} />
              Add Link
            </div>
          </PropertySection>

          <PropertySection>
            <SectionLabel>
              <TextIcon /> CTA Button Text
            </SectionLabel>
            <Input 
              value={navbarData.ctaText} 
              onChange={handleCTAChange}
            />
          </PropertySection>
        </ScrollArea>
      )}

      {activeComponent !== 'Navbar' && (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
          Properties for {activeComponent} coming soon...
        </div>
      )}

      <Footer>Real-time editing enabled</Footer>
    </RightSidebarContainer>
  );
};

export default RightSidebar;
