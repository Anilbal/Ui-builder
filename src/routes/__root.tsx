import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/elements/navbar/Navbar";
import Sidebar from "../components/elements/sidebar/Sidebar";
import RightSidebar from "../components/elements/sidebar/RightSidebar";
import styled from "styled-components";
import { BuilderProvider } from "../contexts/BuilderContext";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentArea = styled.main<{ isPreview?: boolean }>`
  flex: 1;
  padding: ${props => props.isPreview ? '0' : '2rem'};
  background-color: ${props => props.isPreview ? 'white' : '#f3f4f6'};
  overflow-y: auto;
`;

const RootLayout = () => {
  const location = useLocation();
  const isPreview = location.pathname === '/preview';

  if (isPreview) {
    return (
      <BuilderProvider>
        <Outlet />
      </BuilderProvider>
    );
  }

  return (
    <BuilderProvider>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Sidebar />
          <ContentArea>
            <Outlet />
          </ContentArea>
          <RightSidebar />
        </MainContent>
        <TanStackRouterDevtools />
      </AppContainer>
    </BuilderProvider>
  );
};

export const Route = createRootRoute({ component: RootLayout });
