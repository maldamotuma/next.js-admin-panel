"use server"

import Cars from "@/components/car";
import ListCardLoading from "@/components/list/card-loading";
import { FunctionComponent, Suspense } from "react";

interface AppProps {

}

const App: FunctionComponent<AppProps> = async () => {
  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json())



  return (
    <>
      <h1>Welcome to Dashboard!</h1>
      <Suspense
        fallback={<ListCardLoading />}
      >
        <Cars cars={products} />
      </Suspense>
    </>
  );
}

export default App;