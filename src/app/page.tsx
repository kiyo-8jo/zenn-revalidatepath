export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center text-center bg-orange-100 text-xl">
      <div className="flex flex-col h-fit w-fit bg-gray-200  px-20 py-8 rounded-2xl">
        <h2 className="text-4xl font-bold mb-15">Todos</h2>
        <form className="flex flex-col mb-15">
          <input
            type="text"
            className="bg-white rounded-2xl w-80 h-8 mb-15 px-5 border-none"
          />
          <button
            type="submit"
            className="bg-blue-400 w-80 h-8 cursor-pointer text-white rounded-2xl"
          >
            Add
          </button>
        </form>
        <div>
          <ul>
            <li>・aaaaa</li>
            <li>・aaaaa</li>
            <li>・aaaaa</li>
            <li>・aaaaa</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
