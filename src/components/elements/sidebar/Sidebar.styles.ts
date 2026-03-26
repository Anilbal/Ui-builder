import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  width: 260px;
  height: calc(100vh - 64px); /* Subtracting navbar height */
  background-color: #f9fafb;
  border-right: 1px solid #e5e7eb;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  position: sticky;
  top: 64px;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
    top: 0;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
`;

export const SidebarItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: ${props => props.isActive ? '#111827' : '#374151'};
  background-color: ${props => props.isActive ? '#f3f4f6' : 'transparent'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  svg {
    color: ${props => props.isActive ? '#3b82f6' : '#6b7280'};
  }

  &:hover svg {
    color: #3b82f6;
  }
`;

export const SidebarTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #72767dff;
  margin-bottom: 0.5rem;
  padding: 0 1rem;
`;
