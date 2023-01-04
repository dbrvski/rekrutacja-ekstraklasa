import { Outlet } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <ThemeProvider>
      <Toaster />
      <Container>
        <header className="h1">Tabela Ekstraklasy</header>
        <main>
          <Outlet />
        </main>
      </Container>
    </ThemeProvider>
  );
};
