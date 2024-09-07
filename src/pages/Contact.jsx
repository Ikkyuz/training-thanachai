import React from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const params = useParams();
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950">ติดต่อ</h1>
      <hr />
      <h2 className="text-2xl font-bold mt-8 mb-5">NVC Training Center</h2>
      <p className='text-xl mb-5'>
        <span className='font-bold'>Address : </span>90 ถนน เทศา ตำบล พระปฐมเจดีย์ อำเภอ เมือง นครปฐม 73000
      </p>
      <p className='text-xl mb-5'><span className='text-xl font-bold'>Tel : </span>034-252-790, 034-241-853 ต่อ 1105</p>
      <p className='text-xl mb-5'><span className='text-xl font-bold'>E-mail : </span> saraban@nc.ac.th</p>
    </Layout>
  )
}

export default Contact