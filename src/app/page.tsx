import { TopMenu, Sidebar } from '@/components/index';

export default function Home() {
  return (
    <>
      <div className="h-screen bg-cover bg-[url('/imgs/zyro-image.png')]">
        <TopMenu />
        <Sidebar />
        <div className="text_container">
          <h1>CALIDAD PARA TUS CERVEZAS</h1>
          <p>Descubre el lúpulo que hará tus cervezas únicas.</p>
          <p>
            Entra y conoce nuestra historia, nuestro producto y nuestra pasión
          </p>
        </div>
      </div>
    </>
  );
}
