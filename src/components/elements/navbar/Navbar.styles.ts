import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 64px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: auto;
    min-height: 64px;
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6; /* blue-500 */
  cursor: pointer;
  letter-spacing: -0.025em;

  &:hover {
    color: #2563eb; /* blue-600 */
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
`;

export const PreviewButton = styled(Button)`
  background-color: transparent;
  color: #4b5563; /* gray-600 */
  border: 1px solid #d1d5db; /* gray-300 */

  &:hover {
    background-color: #f3f4f6; /* gray-100 */
    border-color: #9ca3af; /* gray-400 */
  }
`;

export const ExportButton = styled(Button)`
  background-color: #000000; /* black */
  color: #ffffff;
  position: relative;

  &:hover {
    background-color: #1a1a1a;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  width: 240px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 1001;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DropdownItem = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const DropdownItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem;
  background-color: #f9fafb;
  border-radius: 0.375rem;
  color: #374151;
  border: 1px solid #e5e7eb;

  ${DropdownItem}:hover & {
    background-color: #ffffff;
    color: #3b82f6;
    border-color: #3b82f6;
  }
`;

export const DropdownItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const DropdownItemTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #111827;
`;

export const DropdownItemDesc = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
`;
