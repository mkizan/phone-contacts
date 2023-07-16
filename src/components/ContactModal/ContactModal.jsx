export const ContactModal = ({ onCloseModal }) => (
  <div className="overlay">
    <div className="modal">
      <form action="">
        <input type="text" name="name" />
        <input type="text" name="number" placeholder="Change number" />
        <button type="button">Save changes</button>
        <button type="button" onClick={() => onCloseModal(false)}>
          Close
        </button>
      </form>
    </div>
  </div>
);
