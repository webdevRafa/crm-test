import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useState } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
    } catch (error) {
      setError("Failed to sign in. Please check your email and password.");
      console.error("Error signing in: ", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[100vh] w-full">
        <div className="bg-blue-med p-20 shadow-xl">
          <h2 className="text-white mb-5">Please sign in for access..</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <form onSubmit={handleSignIn}>
            <div className="mb-2 flex items-center">
              <label className="w-20 text-white" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-2 flex items-center">
              <label className="w-20 text-white" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              className="bg-blue-light p-2 shadow-lg mt-5 text-white  hover:translate-y-[-4px] transition duration-150 ease-in-out"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
