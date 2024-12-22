import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";
import { ActiveSectionContextProvider } from "@/context/ContextActive";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <ActiveSectionContextProvider>
    <div className="selection:bg-[rgba(20,15,41,0.29)] overflow-hidden">
      {" "}
      <Navbar /> {children}{" "}
    </div>
    </ActiveSectionContextProvider>
  );
}
