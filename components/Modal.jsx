import React from 'react'

const Modal = ({ children, isOpen, close }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center w-full p-10 h-full"
            onClick={close}
        >
            <div
                className='bg-white rounded-lg p-6 w-full gap-5 flex flex-col g-1 border-2 mb-15'
                onClick={e => e.stopPropagation()} // impedisce la chiusura se il modale viene cliccato
            >
                {children}
            </div>
        </div>
    )
}

export default Modal