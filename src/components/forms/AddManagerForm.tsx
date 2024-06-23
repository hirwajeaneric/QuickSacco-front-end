import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import LoadingButton from '../others/LoadingButton';
import { AddManagerTypes } from '@/types';
import { addManagerFormSchema } from '@/utils/validationSchemas';

type Props = {
  onSignUp: (values: AddManagerTypes) => void;
  isLoading: boolean;
}

const AddManagerForm = ({ onSignUp, isLoading }: Props) => {
  const form = useForm<AddManagerTypes>({
    resolver: zodResolver(addManagerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'Manager'
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSignUp)} className='space-y-2 w-full'>
        <div className='flex w-full flex-wrap justify-between'>
          <FormField
            control={form.control}
            name='firstName'
            render={({ field }) => (
              <FormItem className='w-full md:w-[49%]'>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastName'
            render={({ field }) => (
              <FormItem className='w-full md:w-[49%]'>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex w-full flex-wrap justify-between'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem  className='w-full md:w-[49%]'>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='w-full md:w-[49%]'>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input type='tel' placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isLoading ? <LoadingButton /> : <Button type='submit'>Submit</Button>}
      </form>
    </Form>
  )
}

export default AddManagerForm;