/* eslint-disable import/no-default-export */
import Head from 'next/head'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/data-pages/first-dashboard">Data Page 1</Link> |{' '}
        <Link href="/data-pages/second-dashboard">Data Page 2</Link> |{' '}
        <Link href="/data-pages/third-dashboard">Data Page 3</Link> |{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Footer</span>
    </footer>
  </div>
)

export default Layout
