import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import {
  NavbarWrapper,
  Brand,
  NavLinks,
  NavLink,
  ActionButton,
} from '../components/sections/NavbarSection/NavbarSection.styles';

export const Route = createFileRoute('/preview')({
  component: PreviewPage,
});

function PreviewPage() {
  const [navbarData, setNavbarData] = useState<any>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('navbarPreviewData');
    if (savedData) {
      setNavbarData(JSON.parse(savedData));
    }
  }, []);

  if (!navbarData) {
    return <div>Loading preview...</div>;
  }

  return (
    <NavbarWrapper isActive={false}>
      <Brand>{navbarData.brand}</Brand>
      <NavLinks>
        {navbarData.links.map((link: any, index: number) => (
          <NavLink key={index} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </NavLinks>
      <ActionButton>{navbarData.ctaText}</ActionButton>
    </NavbarWrapper>
  );
}
