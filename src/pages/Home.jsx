import React from "react";
import img from "../assets/class.jpg"
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">หน้าหลัก</h1>
      <hr />
      <img src={img} alt="" className="items-center justify-center mt-8" />
    </Layout>
  );
};

export default Home;
