import { TopMenu, Sidebar } from '@/components/idex';
import { initialData } from '@/seed/seed';

const products = initialData.products;
export default function Home() {
  return (
    <div className="h-screen bg-[url('/imgs/zyro-image.png')]">
      <TopMenu />
      <Sidebar />
      <h1>LUPULOS RIONEGRO</h1>;
    </div>
  );
}
