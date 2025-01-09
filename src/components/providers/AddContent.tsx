'use client';
import { channelType } from '@prisma/client';
import {
  DialogDescription,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { z } from 'zod';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader, Plus } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DialogContentProp {
  channelType: channelType;
}

const formSchema = z.object({
  link: z.string(),
});

const AddContent = ({ channelType }: DialogContentProp) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: '',
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading((pre) => !pre);
    const resp = await fetch(`/api/addcontent`, {
      method: 'POST',
      body: JSON.stringify({ ...data, channelType: channelType }),
    });

    const respData = await resp.json();
    setLoading(false);
    handleClose();
    router.refresh();
  };

  const handleClose = () => {
    setOpen(false);
    form.reset();
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">
          <Plus />
          Add Content
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-white text-green-600  overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Add New Content
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Give your brain a new thing to store.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter A Link Here"
                      className="text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button variant="destructive" onClick={() => form.reset()}>
                Reset
              </Button>
              <Button>
                {loading ? <Loader className="w-4 h-4 animate-spin" /> : 'Add'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddContent;
