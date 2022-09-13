import ReactDOM from 'react-dom';
import React from 'react';
import './Modal.css';


export function Modal({children}){
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}
