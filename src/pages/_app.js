import { SessionProvider } from 'next-auth/react'
import "tailwindcss/tailwind.css";

function MyApp({ Component,
  pageProps: { session, ...pageProps },
 }) {


  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
