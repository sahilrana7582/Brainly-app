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
import { Plus } from 'lucide-react';

interface DialogContentProp {
  channelType: channelType;
}

const formSchema = z.object({
  link: z.string(),
});

const AddContent = ({ channelType = 'Link' }: DialogContentProp) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: '',
    },
  });
  return (
    <Dialog>
      <DialogTrigger>
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
          <form className="space-y-4">
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
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddContent;
