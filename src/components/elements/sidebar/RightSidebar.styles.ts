import styled from 'styled-components';

export const RightSidebarContainer = styled.aside`
  width: 300px;
  height: calc(100vh - 64px);
  background-color: #0a0a0a;
  border-left: 1px solid #1f1f1f;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 64px;
  align-self: flex-start;
  color: #ffffff;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #1f1f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #a1a1aa;
  letter-spacing: 0.05em;
`;

export const Badge = styled.span`
  background-color: #1f1f1f;
  color: #e4e4e7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem 1rem;
`;

export const PropertySection = styled.div`
  margin-bottom: 2rem;
`;

export const SectionLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #a1a1aa;
  margin-bottom: 0.75rem;

  svg {
    opacity: 0.7;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;
  background-color: #141414;
  border: 1px solid #1f1f1f;
  border-radius: 0.375rem;
  padding: 0.625rem 0.75rem;
  color: #ffffff;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
  }

  &::placeholder {
    color: #52525b;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #52525b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }
`;

export const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid #1f1f1f;
  font-size: 0.75rem;
  color: #52525b;
  text-align: center;
`;
