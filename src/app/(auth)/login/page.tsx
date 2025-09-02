"use client";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Montserrat } from "next/font/google";

import { Eye, EyeOff } from "lucide-react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "400", "700", "800", "900"],
});

export default function Register() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const { emailOrUsername, password } = Object.fromEntries(
      formData.entries()
    );

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}auth/login`,
        { emailOrUsername, password },
        { withCredentials: true }
      );

      const { user, token, paymentRequired, redirect } = res.data;

      // Save minimal non-sensitive info in localStorage
      if (user?.id) {
        localStorage.setItem("x-user-id", user.id);
      }
      localStorage.setItem("isLoggedIn", "true");

      // If backend says payment required → redirect to payment page
      if (paymentRequired && redirect) {
        router.push(redirect);
        return;
      }

      // If token exists, double-check payment status (safety)
      if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        if (!payload.hasPaidOnboarding) {
          router.push("/artist-payment");
          return;
        }
      }

      // Otherwise, go to dashboard
      router.push("/dashboard");
    } catch (error: any) {
      const message = error.response?.data?.message || "Login failed";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-10 w-full px-2 lg:flex-row lg:justify-center lg:items-center lg:max-w-[1400px] lg:mx-auto">
      <div
        className={`relative ${montserrat.className} w-full md:w-[420px] h-[400px] sm:h-[600px]`}
      >
        <Image
          src="/auth/authart.jpg"
          alt="ARS"
          width={420}
          height={600}
          className="w-full h-full p-4 rounded-[50px]"
        />
        <div className="absolute bottom-10 left-0 inset-x-0 p-4 flex flex-col items-center text-white">
          <h1 className="text-3xl md:text-3xl font-bold">Welcome Back</h1>
          <p className="text-center">
            Your creative journey continues from where you left off
          </p>
        </div>
      </div>

      <div
        className={`${montserrat.className} flex flex-col justify-center py-2 w-[400px]`}
      >
        <div className="flex flex-col items-center justify-center w-full p-4">
          <h2 className="text-2xl font-extrabold">Sign In Account</h2>
          <p className="text-sm font-[500]">
            Enter your details to create your account
          </p>
          <div className="flex w-[230px] font-semibold mt-4 justify-between">
            <button className="border flex gap-2 text-sm rounded-[5px] px-4 py-2 border-[#E1E1E1]">
              <Image
                src={"/png/google-95.svg"}
                alt="Google"
                width={20}
                height={20}
              />
              Google
            </button>
            <button className="border rounded-[5px] flex gap-2 text-sm px-4 py-2 border-[#E1E1E1]">
              <Image
                src={"/png/apple-91.svg"}
                alt="Apple"
                width={20}
                height={20}
              />
              Apple
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <li className="w-[200px] border-1 list-none h-0"></li>
          <span>Or</span>
          <li className="w-[200px] border-1 list-none h-0"></li>
        </div>

        <form
          onSubmit={handleLogin}
          className={`flex flex-col ${montserrat.className}`}
        >
          <div className="flex flex-col gap-2 px-4 mb-4">
            <label className="text-xs font-[600]">Email or Username</label>
            <input
              name="emailOrUsername"
              type="text"
              placeholder="email@youremail.com"
              className="border shadow-sm h-10 text-sm p-4 rounded-[5px] w-full max-w-[360px]"
            />
          </div>

          <div className="flex flex-col gap-2 px-4">
            <label className="text-xs font-[600]">Password</label>
            <div className="relative w-full max-w-[360px]">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="border shadow-sm h-10 text-sm p-4 rounded-[5px] w-full pr-10"
              />
              <button
                type="button"
                tabIndex={-1}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#13007D] text-white rounded-[5px] text-sm w-[360px] ml-4 py-1 mt-7 cursor-pointer flex items-center justify-center disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <a href="/register" className="text-xs text-center mt-2">
            Don't have an account?
          </a>
        </form>
      </div>
    </div>
  );
}
