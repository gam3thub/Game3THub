"use client";

import { DynamicContextProvider } from "../app/lib/dynamic";
import { FlowWalletConnectors } from "../app/lib/dynamic";

export default function ProviderWrapper({ children }: React.PropsWithChildren) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "9150bb17-ba9f-439c-9ff5-df215edb8b16",
        walletConnectors: [FlowWalletConnectors],
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}