import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/elements/navbar/Navbar";
import Sidebar from "../components/elements/sidebar/Sidebar";
import styled from "styled-components";

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

const ContentArea = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #f3f4f6;
`;

const RootLayout = () => (
  <AppContainer>
    <Navbar />
    <MainContent>
      <Sidebar />
      <ContentArea>
        <Outlet />
      </ContentArea>
    </MainContent>
    <TanStackRouterDevtools />
  </AppContainer>
);

export const Route = createRootRoute({ component: RootLayout });
