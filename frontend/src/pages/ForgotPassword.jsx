import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Password reset instructions sent to your email!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to send reset instructions.");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  return (
    <div
      className="
        auth-page-bg
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        px-6
        py-10
        overflow-hidden
        relative
      "
    >
      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-80px] w-[340px] h-[570px] rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="absolute bottom-[-140px] right-[-80px] w-[550px] h-[350px] rounded-full bg-sky-500/20 blur-3xl"></div>
      <div className="absolute top-[-140px] right-[-80px] w-[550px] h-[350px] rounded-full bg-violet-500/20 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="
            surface-bg
            animate-in
            w-full
            rounded-[30px]
            px-8
            py-10
            flex
            flex-col
            gap-6
            border
            border-white/10
            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
            dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]
            transition-all
            duration-300
            hover:shadow-[0_20px_40px_rgb(0,0,0,0.16)]
            dark:hover:shadow-[0_20px_40px_rgb(0,0,0,0.7)]
          "
        >
          {/* Back button */}
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm text-muted hover:text-main w-fit transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>

          {/* Heading */}
          <div className="space-y-2 mt-2">
            <h1 className="text-3xl font-bold tracking-tight text-main">
              Forgot Password
            </h1>
            <p className="text-sm text-muted">
              Enter your email address and we&apos;ll send you instructions to reset your password.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 mt-2">
            <label htmlFor="email" className="text-sm font-medium text-main">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="user@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                input-modern
                w-full
                px-4
                py-3
                rounded-2xl
                text-sm
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitLoading || !email}
            className="
              btn btn-primary
              w-full
              py-3
              rounded-2xl
              cursor-pointer
              disabled:opacity-50
              mt-2
            "
          >
            {isSubmitLoading ? "Sending..." : "Send Reset Instructions"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
