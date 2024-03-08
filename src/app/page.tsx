import ProtectedRoute from "@/components/auth/ProtectedRoute";
import HomePage from "@/screens/home/Home";

export default function Home() {
  return (
    <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>
  );
}
