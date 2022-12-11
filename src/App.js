import Home from './components/Home';
import React from 'react';
import { Container } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
//hola
function App() {
  return (
    <Container>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </Container>
  );
}

export default App;
