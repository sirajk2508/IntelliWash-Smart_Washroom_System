import React from 'react'
import Card from './Card'

const Contributors = () => {
  return (
    <div className='my-5 p-10 bg-gray-100 flex justify-center items-center'>
      <Card name="Dr. Gayatri Phade" role="Project Guide"/>
      <Card name="Siraj Khan" role="Software Developer."/>
      <Card name="Arshad Khan" role="Hardware Engineer"/>
      <Card name="Junaid Shaikh" role="Hardware Engineer"/>
    </div>
  )
}

export default Contributors
