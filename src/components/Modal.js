import ReactDOM from 'react-dom';
function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-gray-300 opacity-80'
      ></div>
      <div className='absolute p-10 bg-white inset-40'>Modal</div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
