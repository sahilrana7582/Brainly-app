import { UserButton } from '@clerk/nextjs';
import { ModeToggle } from '../providers/ModeToggle';
import { currentUser } from '@clerk/nextjs/server';
import { Button } from '../ui/button';
import Link from 'next/link';

const NavFooter = async () => {
  const user = await currentUser();
  return (
    <div className="flex items-center justify-evenly w-full">
      {user == null ? (
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
      ) : (
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: 'h-[48px] w-[48px]',
            },
          }}
        />
      )}

      <ModeToggle />
    </div>
  );
};

export default NavFooter;
