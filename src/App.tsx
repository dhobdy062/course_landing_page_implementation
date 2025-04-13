import { CourseLanding } from "./CourseLanding";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { useConvexAuth } from "convex/react";

export default function App() {
  const { isAuthenticated } = useConvexAuth();

  return (
    <main>
      {isAuthenticated ? (
        <div className="auth-container">
          <SignOutButton />
        </div>
      ) : null}
      <CourseLanding />
    </main>
  );
}
