import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 1rem;
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

  &:hover {
    background-color: #1a1a1a;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
