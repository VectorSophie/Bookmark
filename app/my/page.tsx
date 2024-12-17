import { auth, signOut } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

export default async function My() {
  const session = await auth();
  if (!session) return redirect('/api/auth/signin');


  return <><h1>{session.user?.email}</h1>
    <form action={async () => {
      'use server';
      await signOut();
    }}>
      <Button variant='outline'>SignOut</Button>
    </form>
  </>;
}
