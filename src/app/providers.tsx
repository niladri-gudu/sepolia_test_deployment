"use client"

import React from "react"
import { WagmiProvider, webSocket, http } from "wagmi"
import { sepolia } from "viem/chains"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit"

const config = getDefaultConfig({
    appName: "Counter Dapp",
    projectId: process.env.NEXT_PUBLIC_PROJECTID as string,
    chains: [sepolia],
    transports: {
        // [sepolia.id]: webSocket(process.env.NEXT_PUBLIC_SEPOLIA_WS_URL)
        [sepolia.id]: http()
    },
    ssr: true
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}