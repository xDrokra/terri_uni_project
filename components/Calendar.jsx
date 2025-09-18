import React from 'react'

const Calendar = ({setGiornoSelezionato, giornoSelezionato}) => {
  const giorni = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven']

  return (
    <section className='p-5  w-full h-35'>
        <ul className='flex flex-row justify-around h-full font-bold text-2xl items-center' >
            {giorni.map((g, index) => (
              <li key={index} className={`${giornoSelezionato === index + 1 ? 'text-(--bg-glossy)' : 'text-black'}`} onClick={() => {
                console.log(setGiornoSelezionato(index+1))}}>{g}</li>
            ))}
        </ul>
        <hr></hr>
    </section>
  )
}

export default Calendar