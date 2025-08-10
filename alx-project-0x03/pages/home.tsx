import React from "react";
import Header from "@/components/layouts/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
