const Input = ({artist}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      artist(event.target.value);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <label htmlFor="band" className="text-2xl font-semibold text-white">
        Search Band
      </label>
      <input
        type="text"
        id="band"
        className="h-12 p-2 text-2xl border font-normal rounded-md border-gray-300"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default Input;
