import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();

  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h2>Logged in next auth user: {session?.user?.name}</h2>
      <h2>Logge in firebase user {user?.email}</h2>
      <Image
        src={session?.user?.image}
        width="500"
        height={500}
        responsive
      ></Image>
    </div>
  );
};

export default HomePage;
