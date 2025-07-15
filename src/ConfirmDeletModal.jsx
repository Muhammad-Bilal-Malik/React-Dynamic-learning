const ConfirmDeletModal = ({ open, onClose, userId }) => {
  console.log("userid", userId);
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="text-center">
          <h3 className="font-bold text-red-600">Confirm Delete</h3>
          <p>Are you sure you want to Delete it ?</p>
          <div className="flex justify-center mt-3 gap-5 ">
            <button
              onClick={() => {
                userId();
                onClose();
              }}
              className="bg-red-600 hover:bg-red-700 hover:text-gray-300 transition-all rounded px-2 py-1 shadow-md cursor-pointer"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="hover:bg-gray-100 rounded px-2 py-1 shadow-md cursor-pointer"
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletModal;
