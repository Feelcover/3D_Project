import { useTypedSelector } from "@/hooks/useTypedSelector";
import React, { FC } from "react";

const Home: FC = () => {
  const { items } = useTypedSelector((state) => state.carousel);
  return (
    <div className="m-20">
      <h1 className="text-7xl text-center font-medium">Portfolio</h1>
      <section>
        {items.map((item) => (
          <div key={item.id}>{item.id}</div>
        ))}
      </section>
    </div>
  );
};

export default Home;
