import React from 'react';
import './ToDosLoading.css';
import { ReactComponent as LoadingSVG } from '../img/loading.svg';

export function ToDosLoading(){
    return (
        <div className='LoadingToDo-cantainer'>
            <p>We're looking for your tasks</p>
            <LoadingSVG className='LoadingImg'/>
        </div>
    
    )
}