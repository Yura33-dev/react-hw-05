function MoviesPage() {
  return (
    <main className="flex justify-center items-start h-[100vh] mt-16 ">
      <form className="flex w-1/2">
        <input
          type="text"
          name="searchFilm"
          id="searchFilm"
          placeholder="Search movie here"
          className="w-full bg-violet-100 p-4 rounded-md placeholder-slate-900
          focus:outline-none focus:ring-2 ring-pink-600 mr-2"
        />
        <button
          type="submit"
          className="bg-pink-400 px-4 rounded-md text-white 
          hover:bg-pink-600 transition-colors duration-150
          focus:outline-none focus:ring-2 ring-pink-600"
        >
          Search
        </button>
      </form>
    </main>
  );
}

export default MoviesPage;
