import Header from '@/components/routeComponents/Header';

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default RouteLayout;
