/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import style from '../../styles/category.module.css';

interface UserProps {
  dataUsers: Array<any>;
}
export default function category(props: UserProps) {
  const { dataUsers } = props;
  const router = useRouter();
  console.log(dataUsers);
  return (
    <Layout pageTitle="Category Page">
      {dataUsers.map((user) => (
        <div
          key={user.id}
          onClick={() => router.push(`/category/${user.id}`)}
          className={style.card}
        >
          <p>{user.name}</p>
          <p>{user.email}</p>
          <br />
        </div>
      ))}
    </Layout>
  );
}
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
