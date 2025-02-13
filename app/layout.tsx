import type { Metadata } from 'next'
import { Host_Grotesk } from 'next/font/google'

import Header from '@/components/Header'
import NextStepButton from '@/components/NextStepButton'
import Sidebar from '@/components/Sidebar'

import './globals.css'

const host = Host_Grotesk({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-host',
})

export const metadata: Metadata = {
  title: 'Breef Take Home',
  description: 'The right agency for your project - found for you by Breef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`h-full 
          min-h-dvh 
          overflow-x-hidden 
          bg-neutral-50 
          font-sans 
          antialiased 
          ${host.variable}
      `}
      >
        <div className='flex min-h-dvh w-full flex-col bg-[#f5f5f0] font-host'>
          <Header />

          <div className='flex min-h-full w-full flex-1 flex-col lg:flex-row'>
            <Sidebar />

            <main className='w-full'>
              <div className='relative flex h-fit min-h-full w-full flex-col gap-14 px-8 py-10 sm:px-14 sm:py-14 lg:justify-between lg:px-20 lg:pt-20 xl:pl-40'>
                <div className='flex w-full flex-col gap-16 lg:max-w-[800px]'>
                  {children}
                </div>

                <NextStepButton />
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
