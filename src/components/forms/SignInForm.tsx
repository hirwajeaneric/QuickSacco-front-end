import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Too short" }).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email('Invalid email'),
  password: z.string().min(2, 'Too short'),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 w-full md:w-4/5'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email name</FormLabel>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
              <FormDescription>
                Enter your email here
              </FormDescription>
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
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormDescription>
                Enter your Password here
              </FormDescription>
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
      <div className='mt-5'>
        {`Don't have an account? `} 
        <Link to={'/signup'} className='text-blue-600'>Create account</Link>
      </div>
    </Form>
  )
}

export default SignInForm;