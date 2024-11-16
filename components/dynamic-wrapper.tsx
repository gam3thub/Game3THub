"use client";

import { DynamicContextProvider } from "../app/lib/dynamic";
import { FlowWalletConnectors } from "../app/lib/dynamic";

export default function ProviderWrapper({ children }: React.PropsWithChildren) {
  console.log(process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID);
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID as string,
        walletConnectors: [FlowWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}