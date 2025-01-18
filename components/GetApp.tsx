import React from 'react'
import { pricingOptions } from '@/constants'
const GetApp = () => {
  return (
    <section id='getapp' className="flexCenter w-full flex-col pb-[100px]">

      <div className="get-app">

        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">

        <p className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide'>
            Packages
        </p>

        <div className='flex flex-wrap'>

            {pricingOptions.map((option, index) => (
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>

                    <div className='p-10 border border-neutral-700 rounded-xl'>

                        <p className='text-4xl mb-8'>
                            {option.title}
                            {option.title === 'Plan C - Premium Camper' && (
                                <span className='bg-gradient-to-r bg-green-50 text-transparent bg-clip-text text-xl mb-4 ml-2'>
                                    (Premium)
                                </span>
                            )}
                        </p>

                        <p className='mb-8'>
                            <span className='text-5xl mt-6 mr-2'>
                                {option.price}
                            </span>
                            <span className='text-neutral-400 tracking-tight'>/Month</span>
                        </p>

                        <ul>
                            {option.features.map((feature, index) => (
                                <li key={index} className='mt-8 flex items-center'>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href='#'
                        className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-green-900 border border-green-900 rounded-lg transition duration-200">
                          Subscribe
                        </a>

                    </div>

                </div>
             ))
            }
        </div>
      
    </div>
     
  </div>
</section>
  )
}

export default GetApp
