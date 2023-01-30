import DashboardNavbar from "../../DasboardComponent/DashboardNavbar/page";
import { Providers } from "./Providers";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Providers>
          <DashboardNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
