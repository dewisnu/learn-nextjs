/* eslint-disable no-console */
/* eslint-disable prettier/prettier */

import Layout from '../../components/Layout';

interface User {
  name: string,
  email: string,
  phone: string,
  website: string,
  id: number,
}

interface StaticProps {
  params:{
    id:string;
  }
}

interface USerDetailProps{
  user: User;
}

export default function TypeCatgeory(props: USerDetailProps) {
  const { user } = props;
  console.log(props);

  return (
    <Layout pageTitle="List Category">

      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
    </Layout>

  );
}
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,

    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: StaticProps) {
  console.log(context);
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
