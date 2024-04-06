import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter> 
    </QueryClientProvider>
);