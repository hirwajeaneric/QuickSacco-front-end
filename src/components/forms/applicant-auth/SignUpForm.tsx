import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { useState } from 'react';
import LoadingButton from '../../others/LoadingButton';
import { SignUpFormTypes } from '@/types';
import { z } from 'zod';

const applicantSignupFormSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[A-Za-z\s-']+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[A-Za-z\s-']+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes'),
  phone: z.string().min(10).max(10),
  email: z.string().email('Invalid email'),
  password: z.string().min(2, 'Too short'),
});

type Props = {
  onSignUp: (values: SignUpFormTypes) => void;
  isLoading: boolean;
}

const SignUpForm = ({ onSignUp, isLoading }: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const form = useForm<SignUpFormTypes>({
    resolver: zodResolver(applicantSignupFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    }
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSignUp)} className='space-y-4 w-full md:w-4/5 p-5 md:p-0'>
        <div className='flex w-full flex-wrap justify-between space-y-4 md:space-y-0 items'>
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
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
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
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input type='tel' placeholder="Your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={passwordVisible ? 'text' : 'password'} placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-start gap-2'>
          <Checkbox id='viewpassword' className='' onClick={() => setPasswordVisible(!passwordVisible)} />
          <label htmlFor='viewpassword' className='text-sm'> View password</label>
        </div>

        {isLoading ? <LoadingButton /> : <Button type='submit'>Submit</Button>}

        <div className='mt-5'>
          {`Already has an account? `}
          <a href={'/signin'} className='text-blue-600'>Login</a>
        </div>
      </form>
    </Form>
  )
}

export default SignUpForm;