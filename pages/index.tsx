import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/image.jpeg" width={2000} height={600} alt="image" />
      <h1 className={styles['title-homepage']}>Welcome Ariwisnu</h1>
    </Layout>
  );
}
