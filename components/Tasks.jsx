import React, { useState } from 'react'





const Tasks = ({data}) => {


    return (
        <section className='px-8 mt-2 pb-45  overflow-auto max-h-160'>
            <div className="w-full flex flex-col gap-5">

                {data ? data.map((lezione, index) => (
                    <div className="p-4 px-8 bg-(--bg-glossy) rounded-xl" key={index}>
                        <div className='flex justify-between mb-2'>
                            <span className='font-bold flex'>{lezione.lection} ({lezione.class})
                            </span>
                            <span className='text-sm italic'>{lezione.startTime} / {lezione.endTime}</span>
                        </div>
                        <p className='text-gray-900'>{lezione.description || `lezione di ${lezione.lection}`}</p>
                        <span className='flex items-end font text-sm mt-3 italic'>{lezione.professor}</span>
                    </div>
                    
                )): 'cane'}


            </div>
        </section>
    )
}

export default Tasks