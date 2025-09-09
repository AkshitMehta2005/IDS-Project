const Predict = () => {
  const fields = [
    "Fwd Packet Length Max",
    "Total Length of Fwd Packets",
    "Avg Fwd Segment Size",
    "Flow IAT Max",
    "Subflow Fwd Bytes",
    "Average Packet Size",
    "Bwd Packet Length Std",
    "Flow Duration",
    "Packet Length Mean",
    "Init_Win_bytes_forward",
    "Init_Win_bytes_backward",
    "Bwd Packets/s",
  ];

  return (
    <div className="mt-20 px-6">
      <h2 className="text-2xl font-bold mb-6">Packet Details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fields.map((f, i) => (
          <input
            key={i}
            type="text"
            placeholder={f}
            className="p-3 border rounded shadow-sm focus:outline-blue-500"
          />
        ))}
        <button 
          type="submit" 
          className="col-span-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
        >
          Check Packet
        </button>
      </form>
    </div>
  );
};

export default Predict;
