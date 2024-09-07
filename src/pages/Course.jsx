import React from 'react'
import Layout from '../components/Layout'

const Course = () => {
  return (
    <Layout>
        <h1 className="font-bold text-4xl text-blue-950">หลักสูตรที่เปิดสอน</h1>
        <hr />
        <section className='flex flex-col items-center justify-center mt-8 p-5'>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className='max-w-sm rounded-md overflow-hidden shadow-lg bg-white border-spacing-8'>
            <img src="src\assets\basic-react-native.png" alt="" className='object-cover' />
            <div class="px-6 py-4">
              <h2 class="font-bold">Basic React Native</h2>
              <p>ระยะเวลา (วัน): 5</p>
              <h2 class="font-bold">ราคา 7500 บาท</h2>
            </div>
          </div>
          <div className='max-w-sm rounded-md overflow-hidden shadow-lg bg-white border-spacing-5'>
            <img src="src\assets\powerbi-dashboard.png" alt="" />
            <div class="px-6 py-4">
              <h2 class="font-bold">Power Bi Dashboard</h2>
              <p>ระยะเวลา (วัน): 4</p>
              <h2 class="font-bold">ราคา 5500 บาท</h2>
            </div>
          </div>
          <div className='max-w-sm rounded-md overflow-hidden shadow-lg bg-white border-spacing-5'>
            <img src="src\assets\ui-design-with-figma.png" alt="" />
            <div class="px-6 py-4">
              <h2 class="font-bold">UI Design with Figma</h2>
              <p>ระยะเวลา (วัน): 3</p>
              <h2 class="font-bold">ราคา 5000 บาท</h2>
            </div>
          </div>
          <div className='max-w-sm rounded-md overflow-hidden shadow-lg bg-white border-spacing-5'>
            <img src="src\assets\cross-platform-with-flutter.png" alt="" />
            <div class="px-6 py-4">
              <h2 class="font-bold">Cross Platform with Flutter</h2>
              <p>ระยะเวลา (วัน): 5</p>
              <h2 class="font-bold">ราคา 6500 บาท</h2>
            </div>
          </div>
        </div>
          
        </section>
        
    </Layout>
  )
}

export default Course
