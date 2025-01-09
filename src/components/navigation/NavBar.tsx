import Logo from './Logo';
import NavAction from './NavAction';
import NavFooter from './NavFooter';

const NavBar = () => {
  return (
    <div className="h-full w-full bg-white dark:bg-[#313338] flex flex-col justify-between py-2">
      <div className="flex justify-center flex-col space-y-6">
        <Logo />
        {['Twitter', 'Youtube', 'Documents', 'Links'].map((name) => (
          //@ts-ignore
          <NavAction key={name} name={name} />
        ))}
      </div>
      <div className="flex justify-center">
        <NavFooter />
      </div>
    </div>
  );
};

export default NavBar;
