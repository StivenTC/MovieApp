'use client'
import { AuthUserProvider } from "@/hooks/context/useAuthUserContext"

const AppWithProvider = ({ children }: { children: React.ReactNode }) => (
  <AuthUserProvider>
    {children}
  </AuthUserProvider>
)

export default AppWithProvider
