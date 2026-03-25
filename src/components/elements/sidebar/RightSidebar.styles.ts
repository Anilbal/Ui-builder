import styled from 'styled-components';

export const RightSidebarContainer = styled.aside`
  width: 300px;
  height: calc(100vh - 64px);
  background-color: #f9fafb;
  border-left: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 64px;
  align-self: flex-start;
  color: #111827;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SidebarHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #6b7280;
  letter-spacing: 0.05em;
`;

export const Badge = styled.span`
  background-color: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
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
  font-weight: 600;
  color: #4b5563;
  margin-bottom: 0.75rem;

  svg {
    color: #6b7280;
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
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.625rem 0.75rem;
  color: #111827;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #9ca3af;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    color: #ef4444; /* red-500 for delete */
  }

  &:has(svg[data-icon="plus"]):hover {
      color: #3b82f6;
  }
`;

export const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  font-size: 0.75rem;
  color: #6b7280;
  text-align: center;
`;
