
import Mod from "../img/modal.jpg";

function Modal ({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={Mod} alt='/' />
        <div className='modalRight'>
          <button className='closeBtn' onClick={onClose}>
            X
          </button>
          <div className='content'>
            <h3>Osvojite domaće kolače učestvovanjem u našoj nagradnoj igri!</h3>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary' onClick={()=>{ alert('Pratite našu stranicu za proglašenje pobednika');}} >
              <span className='bold'>DA,</span> naravno!
            </button>
            <button className='btnOutline'  onClick={onClose}>
              <span className='bold'>NE</span>, neki drugi put
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;