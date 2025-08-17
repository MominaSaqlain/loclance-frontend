import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export const metadata = { title: "Dashboard | Loclance" };

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Sidebar />
        <Topbar />
        <main className="pt-16 pl-64 pr-6 pb-6">
          {children}
        </main>
      </body>
    </html>
  );
}
