export const dynamic = "force-dynamic";

import "./globals.css";
import Provider from "@providers/Provider";
import { SocketProvider } from "@context/SocketContext";
import { ToasterProvider } from "@providers/toast-provider";
import SocketIndicator from "@components/SocketIndicator";

import localFont from "next/font/local";
import { EdgeStoreProvider } from "@lib/edgestore";
import { siteConfig } from "@config/site";

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: [
        {
            url: "/cal.png",
            href: "/cal.png",
        },
    ],
};

const font = localFont({
    src: "../public/fonts/charlie-display-3.ttf",
});

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body
                className={`min-h-screen transition-colors duration-150 ease-linear ${font.className}}`}
            >
      
                <EdgeStoreProvider>
                    <Provider>
                        <SocketProvider>
                            <ToasterProvider />
                            <SocketIndicator />
                            <main className="relative h-screen flex-center py-8 px-4 md:p-8 bg-main bg-gradient-to-b from-sky-300 via-sky-200 to-sky-100">
                                {children}
                            </main>
                        </SocketProvider>
                    </Provider>
                </EdgeStoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
