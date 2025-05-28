import type { PropsWithChildren } from "react";
import { Header } from "../Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="c-layout">
      <Header />
      <main className="c-layout__main">{children}</main>
    </div>
  );
}

export default Layout;
