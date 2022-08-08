const Input = ({artist}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      artist(event.target.value);
    }
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <label htmlFor="band" className="md:text-2xl sm:text-base font-semibold text-white">
        Search Band
      </label>
      <input
      placeholder="Type Artist/Band Name and hit Enter"
        type="text"
        id="band"
        className="md:h-12 lg:h-12 sm:h-8 p-2 text-2xl border font-normal rounded-md border-gray-300"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
export default Input;
