import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';
function ModalPage() {
  const [showModal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };
  return (
    <div className='relative '>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && <Modal onClose={handleClose} />}
    </div>
  );
}

export default ModalPage;
