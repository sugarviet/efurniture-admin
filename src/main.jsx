import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ConfigProvider } from "antd";

const primary = '#1677ff'
const blackColor = '#000'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <ConfigProvider
          theme={{
            components: {
              Button: {
                algorithm: true,
                borderRadius: "12px",
                colorPrimary: primary,
                colorPrimaryActive: primary,
          
                defaultBg: primary
              },
              Switch: {
                algorithm: true,
                colorPrimary: blackColor,
                colorPrimaryBorder: blackColor,
                colorPrimaryHover: blackColor
              }
            },
          }}
        >
      <App />
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>,
)
