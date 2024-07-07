import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import Separator from '../components/Separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../components/ui/card';

import google from '../assets/google.png';

const SignInPage = () => {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Card className="min-w-[300px] w-[330px] max-w-[330px] space-y-5 shadow-lg">
        <CardHeader className="flex flex-col gap-5">
          <CardTitle>episode.</CardTitle>
          <CardDescription className="flex flex-col">
            <span className="font-bold">Sign in</span>
            <span>to continue to episode</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div>
            <Button variant="outline" className="flex gap-3 w-full">
              <img src={google} height={24} width={24} />
              Continue with Google
            </Button>
          </div>

          <Separator className="my-2">
            or
          </Separator>

          <div>
            <form className="flex flex-col gap-2">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="text" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <footer>
                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </footer>
            </form>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm">
            No account?{' '}
            <Link to="/sign-up" className="text-primary font-medium underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignInPage;
