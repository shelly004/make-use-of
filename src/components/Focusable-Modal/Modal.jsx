import "./Modal.css";
import { useRef, useEffect } from "react";
export default function Modal({ onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);
  return (
    <div className="backdrop">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="title"
        aria-describedby="description"
      >
        <button
          className="closebtn"
          aria-label="Close dialog"
          onClick={() => {
            onClose();
          }}
        >
          X
        </button>
        <h2 id="title">Delete Item</h2>
        <p id="description">Are you sure you want to delete?</p>
        <div className="actions">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={() => {
              alert("Deleted Successfully!");
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
