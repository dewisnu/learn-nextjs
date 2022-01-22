/* eslint-disable prettier/prettier */
import { ReactNode } from 'react';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          Nextjs |
          {pageTitle}
          {' '}
        </title>
        <meta name="description" content="Website untuk bealajar nextJS" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
