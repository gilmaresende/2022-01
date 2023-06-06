import { Header } from '@/components/header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (<SessionProvider session={pageProps.session}>
    <div className={inter.className}>
      <Header/>
      <Component {...pageProps} />
    </div>
  </SessionProvider>)
}
