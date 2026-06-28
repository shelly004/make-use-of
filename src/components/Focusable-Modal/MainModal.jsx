import "./Modal.css";
import { useState, useRef } from "react";
import Modal from "./Modal";
export default function MainModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
    openButtonRef.current?.focus();
  };
  return (
    <div className="App">
      <h1>Modal</h1>
      <h4>Click here to open Modal</h4>
      <button onClick={() => setIsOpen(true)} ref={openButtonRef}>
        Open Modal
      </button>
      {isOpen && <Modal onClose={handleClose} />}
    </div>
  );
}
