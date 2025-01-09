'use client';
import { Plus, SquareArrowOutUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import AddContent from '../providers/AddContent';
import { usePathname } from 'next/navigation';
import { channelType } from '@prisma/client';

const Header = () => {
  const path = usePathname();
  //@ts-ignore
  const channel: channelType = [
    'Twitter',
    'Youtube',
    'Documents',
    'Links',
  ].find((name) => path.includes(name.toLowerCase()));

  console.log(channel);
  return (
    <div className="h-[88px] shadow-md p-6 flex items-center justify-between">
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        All Notes
      </h2>

      <div className="flex gap-4 items-center">
        <Button variant="little" size="lg">
          <SquareArrowOutUpRight />
          Share Brain
        </Button>
        <AddContent channelType={channel || 'Link'} />
      </div>
    </div>
  );
};

export default Header;
