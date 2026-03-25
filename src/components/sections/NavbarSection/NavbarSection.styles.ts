import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100%;
  background-color: #0a0a0a;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const Brand = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: #ffffff;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 0.875rem;
  font-weight: 500;
  color: #a1a1aa;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const ActionButton = styled.button`
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
`;
