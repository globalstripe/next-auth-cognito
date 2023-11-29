import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <div>
      <Head>
        <title>Authentication with NextAuth 4.xx and AWS Cognito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8 flex items-center flex-col">


            {!session &&
              <>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Example NextAuth 4.x Sign In
                </h2>
                <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900"
                >Status: {status}</h2>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-1/2 mt-12 rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                  onClick={() => signIn('cognito', {
                    callbackUrl: `${window.location.origin}/protected`
                  })}
                >
                  Sign In
                </button>
              </>
            }

            {session &&
              <>
                <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
                  Welcome, {session.user.name ?? session.user.email}
                  <h2>Session Valid Until, {session.expires}</h2>
                  <h2>User Image: {session.user.image}</h2>
                  <h2>Status: {status}</h2>
                </h1>

                  <Link
                  href="/protected"
                  className="inline-flex items-center justify-center w-1/2 mt-12 rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10 disabled:opacity-50 disabled:cursor-not-allowed">
                  <button
                  >Protected Page</button>
                  </Link>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-1/2 mt-12 rounded-md border border-transparent px-5 py-3 bg-gray-900 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                  onClick={() => signOut({
                    callbackUrl: `${window.location.origin}`
                  })}
                >
                  Sign Out
                </button>
              </>
            }

          </div>
        </div>
      </main>
    </div>
  )
}
