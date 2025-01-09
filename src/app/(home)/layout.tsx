import NavBar from '@/components/navigation/NavBar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center w-[250px] h-full z-30 fixed inset-y-0 border-r border-green-500 dark:border-green-500">
        <NavBar />
      </div>
      <main className="md:pl-[250px] h-full ">{children}</main>
    </div>
  );
};

export default HomeLayout;
