import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex p-2 items-center z-40 gap-2 shadow-md w-full justify-center">
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
      <small className="text-sm font-medium uppercase leading-none text-zinc-500 dark:text-zinc-200">
        Brainly
      </small>
    </div>
  );
};

export default Logo;
