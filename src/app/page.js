"use client"
import { useEffect, useState } from "react";
import Bottom from "../../components/Bottom";
import Calendar from "../../components/Calendar";
import Tasks from "../../components/Tasks";
import Modal from "../../components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [giornoSelezionato, setGiornoSelezionato] = useState(null);

  const [lezioni, setLezioni] = useState([]);
  const [task, setTask] = useState({
    id: null,
    dayWeek: '',
    lection: '',
    startTime: null,
    endTime: null,
    description: '',
    class: '',
    professor: ''
  })


  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTask({
      dayWeek: '',
      lection: '',
      startTime: '',
      endTime: '',
      description: '',
      class: '',
      professor: ''
    });
  };

  const handleOpenModal = () => setIsModalOpen(true)
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setTask(prevState => ({ ...prevState, [name]: value }))
  }

  const handleRemove = (id) => {
    const newLezioni = lezioni.filter((lezione) => lezione.id !== id);
    setLezioni(newLezioni)
    localStorage.setItem('lezioni', JSON.stringify(newLezioni));
  }

  const handleForm = (e) => {
    e.preventDefault();
    const savedLezioni = localStorage.getItem('lezioni')
    const lezioniEsistenti = savedLezioni ? JSON.parse(savedLezioni) : [];

    const nuovaLezioneId = {
      ...task,
      id: Date.now()
    }

    const newLezioni = [...lezioniEsistenti, nuovaLezioneId];
    localStorage.setItem('lezioni', JSON.stringify(newLezioni));

    setLezioni(newLezioni);
    handleCloseModal()
  }

  useEffect(() => {
    const savedLezioni = localStorage.getItem('lezioni')
    const giorno = new Date().getDay()

    if (giorno >= 1 && giorno <= 5) {
      setGiornoSelezionato(giorno);
    } else {
      // Se è sabato o domenica, imposta a null
      setGiornoSelezionato(null);
    }

    if (savedLezioni) {
      setLezioni(JSON.parse(savedLezioni));
    }
  }, [])

  const lezioniFiltrate = Array.isArray(lezioni)
    ? lezioni.filter((lezione) => lezione.dayWeek == giornoSelezionato)
    : [];


  return (
    <>
      <Calendar setGiornoSelezionato={setGiornoSelezionato} giornoSelezionato={giornoSelezionato} />
      <Tasks data={lezioniFiltrate} onRemove={handleRemove} />
      <Bottom handleOpenModal={handleOpenModal} />
      <Modal isOpen={isModalOpen} close={handleCloseModal}>
        <form className="flex flex-col gap-5" method="post" onSubmit={handleForm}>
          <h2 className="text-2xl font-bold">Lezione</h2>
          <select value={task.dayWeek} name="dayWeek" onChange={handleChangeForm} className="border-1 rounded border-gray-300 p-2 px-4" required>
            <option value='' disabled>Giorno della settimana</option>
            <option value={1}>Lunedi</option>
            <option value={2}>Martedi</option>
            <option value={3}>Mercoledi</option>
            <option value={4}>Giovedi</option>
            <option value={5}>Venerdi</option>
          </select>

          <input type="text" value={task.lection} name="lection" onChange={handleChangeForm} placeholder="Nome lezione" className="border-1 rounded border-gray-300 p-2 px-4" required />

          <input type="time" value={task.startTime || ''} name="startTime" onChange={handleChangeForm} className="border-1 rounded border-gray-300 p-2 px-4 w-full" required />
          <input type="time" value={task.endTime || ''} name="endTime" onChange={handleChangeForm} className="border-1 rounded border-gray-300 p-2 px-4 w-full" required />

          <textarea value={task.description} name="description" onChange={handleChangeForm} className="w-full border-1 border-gray-300 h-30 resize-none rounded p-2 px-4" placeholder="descrizione"></textarea>
          <input value={task.class} type="text" name="class" onChange={handleChangeForm} placeholder="Aula" className="border-1 border-gray-300 rounded p-2 px-4" required />
          <input value={task.professor} type="text" name="professor" onChange={handleChangeForm} placeholder="Nome Professore" className="border-1 border-gray-300 rounded p-2 px-4" required />

          <button type="submit" className=" bg-(--bg-glossy) p-3 rounded-2xl font-bold">Aggiungi</button>
        </form>
      </Modal>
    </>

  )
};
