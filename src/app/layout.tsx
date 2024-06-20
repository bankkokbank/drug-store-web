import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { App, ConfigProvider } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import RecoilContextProvider from "./recoilContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drug Store",
  description: "Find Nearest Drug Store In Google Map",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          <AntdRegistry>
            <ConfigProvider>
              <App>{children}</App>
            </ConfigProvider>
          </AntdRegistry>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
