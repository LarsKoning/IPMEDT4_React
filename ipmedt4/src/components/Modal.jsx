import React from 'react'
import '../styles/modal.css'
import money from '../images/money.jpg'


const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="modalContainer">
            <img src={money} alt="" />
            <div className="modalRight">
                <p onClick={onClose} className='closeBtn'>X</p>

                <div className="content">
                    <p>Do You Want To Earn</p>
                    <h1>MORE MONEY</h1>
                    <p>Each Month?</p>
                </div>
                <div className="btnContainer">
                    <button className='btnPrimary'>
                        <span className='bold'>YES</span>, Ofcourse I Do
                    </button>
                    <button className='btnOutline'>
                        <span className="bold">NO</span>, Thanks
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal