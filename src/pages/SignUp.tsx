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
import Spinner from '../components/ui/Spinner';

import google from '../assets/google.png';

import { isFullnameValid, isUsernameValid, isPasswordValid } from '../utils';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const httpRegisterUser = async () => {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName,
        username,
        password
      })
    });

    const data = await response.json();
    return data;
  };

  const handleClickRegister = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isFullnameValid(fullName)) {
      setErrors((prev) => ({
        ...prev,
        fullName: 'Full Name must be greater than or equal to 10 characters'
      }));
    }

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

    if (
      isFullnameValid(fullName) &&
      isUsernameValid(username) &&
      isPasswordValid(password)
    ) {
      await httpRegisterUser();
      setLoading(false);
      navigate('/');
    }
    setLoading(false);
  };

  return (
    <main>
      <Card className="h-screen flex flex-col justify-center w-screen max-w-[500px] space-y-5 shadow-lg sm:h-auto">
        <CardHeader className="flex flex-col gap-2 pb-0">
          <CardTitle>episode.</CardTitle>
          <CardDescription className="flex flex-col">
            <span className="font-bold">Create your account</span>
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
            <form
              onSubmit={handleClickRegister}
              className="flex flex-col gap-2"
            >
              <div>
                <Label htmlFor="full-name">Full Name</Label>
                <Input
                  id="full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>
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
                  {loading ? 'Loading' : 'Continue'}
                </Button>
              </footer>
            </form>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm flex gap-1">
            Have an account?
            <Link
              to="/auth/sign-in"
              className="text-primary font-medium underline"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignUpPage;
