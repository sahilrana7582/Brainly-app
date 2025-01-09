'use client';
import { BookOpenText, Link, Shell, Twitter, X, Youtube } from 'lucide-react';
import ActionToolKit from '../providers/ToolTipProvider';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

type nameType = 'Twitter' | 'Youtube' | 'Links' | 'Documents';
interface NavActionProp {
  name: nameType;
}

const iconMap = {
  Twitter: <Shell className="text-black dark:text-white w-8 h-8 " />,
  Youtube: <Youtube className="text-black dark:text-white w-8 h-8 " />,
  Documents: <BookOpenText className="text-black dark:text-white w-8 h-8 " />,
  Links: <Link className="text-black dark:text-white w-8 h-8 " />,
};

const NavAction = ({ name }: NavActionProp) => {
  const path = usePathname();
  const router = useRouter();

  const handleRouter = () => {
    router.push(`/${name.toLowerCase()}`);
  };

  return (
    <ActionToolKit label={name} align="center" side="left">
      <button
        className={cn(
          'group relative flex items-center space-x-4 w-full p-2',
          path.includes(name.toLocaleLowerCase()) && 'bg-green-500 rounded-sm'
        )}
        onClick={handleRouter}
      >
        <>
          <div className={cn()}>{iconMap[name]}</div>
          <div>{name}</div>
        </>
      </button>
    </ActionToolKit>
  );
};

export default NavAction;
