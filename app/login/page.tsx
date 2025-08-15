"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { customFetch } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { getUser } from "@/store/slices/authSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@cheezious.com");
  const [password, setPassword] = useState("CheezPTS@123");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await customFetch("/User/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe: true }),
      });

      const data = await res.json();
      if (data.success) {
        toast({
          description: data.data.message,
        });
        document.cookie = `auth-token=${data.data.token}; path=/; max-age=86400`;
        dispatch(getUser());
        router.refresh();
      } else {
        toast({
          variant: "destructive",
          description: data.message || "Something went wrong",
        });
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        description: err.message || "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md shadow-xl border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80">
        <CardHeader className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <BarChart3 className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              PTS360
            </span>
          </div>
          <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            Sign in to your dashboard account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-2">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-gray-700 dark:text-gray-300"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-gray-700 dark:text-gray-300"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          {/* <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            <p>Demo Account:</p>
            <p>Email: admin@pts360.com</p>
            <p>Password: password123</p>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
