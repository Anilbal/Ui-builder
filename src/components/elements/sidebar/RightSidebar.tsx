import React from "react";
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
} from "./RightSidebar.styles";
import { TextIcon, ListIcon, TrashIcon, PlusIcon } from "../icons/Icons";
import { useBuilder } from "../../../contexts/BuilderContext";
import styled from "styled-components";

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
  text-align: center;
  color: #a1a1aa;
`;

const EmptyText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  max-width: 200px;
`;

const ToggleContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 0.5rem;
`;

const ToggleSwitch = styled.div<{ active: boolean }>`
  width: 36px;
  height: 20px;
  background-color: ${props => props.active ? '#3b82f6' : '#3f3f46'};
  border-radius: 10px;
  position: relative;
  transition: background-color 0.2s;

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: ${props => props.active ? '18px' : '2px'};
    transition: left 0.2s;
  }
`;

const RightSidebar: React.FC = () => {
  const { activeComponent, navbarData, setNavbarData } = useBuilder();

  if (!activeComponent) {
    return (
      <RightSidebarContainer>
        <SidebarHeader>
          <HeaderTitle>PROPERTIES</HeaderTitle>
        </SidebarHeader>
        <EmptyStateWrapper>
          <EmptyText>
            Select a component from the sidebar to edit its properties
          </EmptyText>
        </EmptyStateWrapper>
      </RightSidebarContainer>
    );
  }

  const handleToggleLogo = () => {
    setNavbarData((prev) => ({ ...prev, showLogo: !prev.showLogo }));
  };

  const handleLogoUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavbarData((prev) => ({ ...prev, logoUrl: e.target.value }));
  };

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavbarData((prev) => ({ ...prev, brand: e.target.value }));
  };

  const handleLinkChange = (index: number, value: string) => {
    const newLinks = [...navbarData.links];
    newLinks[index] = { ...newLinks[index], label: value };
    setNavbarData((prev) => ({ ...prev, links: newLinks }));
  };

  const deleteLink = (index: number) => {
    const newLinks = navbarData.links.filter((_, i) => i !== index);
    setNavbarData((prev) => ({ ...prev, links: newLinks }));
  };

  const addLink = () => {
    setNavbarData((prev) => ({
      ...prev,
      links: [...prev.links, { label: "New Link", href: "#" }],
    }));
  };

  const handleCTAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavbarData((prev) => ({ ...prev, ctaText: e.target.value }));
  };

  return (
    <RightSidebarContainer>
      <SidebarHeader>
        <HeaderTitle>PROPERTIES</HeaderTitle>
        <Badge>{activeComponent}</Badge>
      </SidebarHeader>

      {activeComponent === "Navbar" && (
        <ScrollArea>
          <PropertySection>
            <ToggleContainer onClick={handleToggleLogo}>
              <SectionLabel style={{ margin: 0 }}>
                Logo Image
              </SectionLabel>
              <ToggleSwitch active={navbarData.showLogo} />
            </ToggleContainer>
            
            {navbarData.showLogo && (
              <div style={{ marginTop: '0.5rem' }}>
                <SectionLabel style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                  Image URL
                </SectionLabel>
                <Input 
                  placeholder="https://example.com/logo.png" 
                  value={navbarData.logoUrl} 
                  onChange={handleLogoUrlChange} 
                  style={{width:"100%"}}
                />
              </div>
            )}
          </PropertySection>

          <PropertySection>
            <SectionLabel>
              <TextIcon /> Brand Name
            </SectionLabel>
            <Input value={navbarData.brand} onChange={handleBrandChange} />
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
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#3b82f6",
                fontSize: "0.875rem",
                cursor: "pointer",
                marginTop: "0.5rem",
                padding: "0.25rem",
              }}
              onClick={addLink}
            >
              <PlusIcon style={{ width: "14px", height: "14px" }} />
              Add Link
            </div>
          </PropertySection>

          <PropertySection>
            <SectionLabel>
              <TextIcon /> CTA Button Text
            </SectionLabel>
            <Input value={navbarData.ctaText} onChange={handleCTAChange} />
          </PropertySection>
        </ScrollArea>
      )}

      {activeComponent !== "Navbar" && (
        <div style={{ padding: "2rem", textAlign: "center", color: "#6b7280" }}>
          Properties for {activeComponent} coming soon...
        </div>
      )}

      <Footer>Real-time editing enabled</Footer>
    </RightSidebarContainer>
  );
};

export default RightSidebar;
