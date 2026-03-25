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

const RightSidebar: React.FC = () => {
  const navLinks = ['Home', 'Features', 'Pricing', 'Contact'];

  return (
    <RightSidebarContainer>
      <SidebarHeader>
        <HeaderTitle>Properties</HeaderTitle>
        <Badge>Navbar</Badge>
      </SidebarHeader>

      <ScrollArea>
        <PropertySection>
          <SectionLabel>
            <TextIcon /> Brand Name
          </SectionLabel>
          <Input defaultValue="Brand" />
        </PropertySection>

        <PropertySection>
          <SectionLabel>
            <ListIcon /> Navigation Links
          </SectionLabel>
          {navLinks.map((link, index) => (
            <InputWrapper key={index}>
              <Input defaultValue={link} />
              <IconButton>
                <TrashIcon />
              </IconButton>
            </InputWrapper>
          ))}
          <InputWrapper>
            <Input placeholder="Add item..." />
            <IconButton>
              <PlusIcon />
            </IconButton>
          </InputWrapper>
        </PropertySection>

        <PropertySection>
          <SectionLabel>
            <TextIcon /> CTA Button Text
          </SectionLabel>
          <Input defaultValue="Get Started" />
        </PropertySection>
      </ScrollArea>

      <Footer>Click a field in the canvas to highlight it here</Footer>
    </RightSidebarContainer>
  );
};

export default RightSidebar;
