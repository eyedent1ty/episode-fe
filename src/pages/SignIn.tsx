import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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

import { isUsernameValid, isPasswordValid } from '../utils';
import Spinner from '../components/ui/Spinner';

const SignInPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  function handleSignin(e: FormEvent) {
    setLoading(true);
    e.preventDefault();

    if (!isUsernameValid(username)) {
      setErrors((prev) => ({
        ...prev,
        username: 'Username must be 8 or more characters'
      }));
    }

    if (!isPasswordValid(password)) {
      setErrors((prev) => ({
        ...prev,
        password: 'Password must be 8 or more characters'
      }));
    }

    if (isUsernameValid(username) && isPasswordValid(password)) {
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 3000);
    }
  }

  return (
    <main>
      <Card className="h-screen flex flex-col justify-center w-screen max-w-[500px] space-y-5 shadow-lg sm:h-auto">
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

          <Separator className="my-2">or</Separator>

          <div>
            <form className="flex flex-col gap-2" onSubmit={handleSignin}>
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <p className="text-sm text-destructive">{errors.username}</p>
                )}
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password}</p>
                )}
              </div>
              <footer>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Spinner />}
                  {loading ? 'Logging in' : 'Continue'}
                </Button>
              </footer>
            </form>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm">
            No account?{' '}
            <Link
              to="/auth/sign-up"
              className="text-primary font-medium underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignInPage;
