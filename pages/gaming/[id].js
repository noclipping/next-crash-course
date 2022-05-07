import React from "react";
import { useRouter } from "next/router";
export default function id({ id }) {
  const router = useRouter();

  return <div>id: {router.query.id}</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {
      id: context.params.id,
    },
  };
}
