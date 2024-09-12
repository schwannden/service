import { UserProvider } from '@auth0/nextjs-auth0/client'
import ReactQueryProvider from './query-client-provider'

/** 頂層 providers 進入點 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </UserProvider>
  )
}
