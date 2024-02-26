import React from "react";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div className="flex justify-around text-lg bg-blue-600 text-white">
      <header>
        <h1 className="font-bold text-2xl italic">TicketPal</h1>
      </header>
      <div>
        <a href="/" className="hover:cursor-pointer">
          Concerts
        </a>
      </div>
      <div>
        <a href="/" className="hover:cursor-pointer">
          Sports
        </a>
      </div>
      <div>
        <a href="/" className="hover:cursor-pointer">
          Arts & Theater
        </a>
      </div>
      <div>
        <a href="/" className="hover:cursor-pointer">
          Family
        </a>
      </div>
      <div>
        <a href="/" className="hover:cursor-pointer">
          Sign In/Register
        </a>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex justify-center bg-blue-600 outline-offset-4 outline-4 ring-white p-2">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        required
        className="w-1/3 p-2 placeholder:p-4"
      />
      <button type="submit" className="bg-blue-600 text-white border-2 px-3">
        Search
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800">
      <p className="text-white text-center">
        Copyright &copy; TicketPal <span>2024</span>{" "}
      </p>
    </footer>
  );
}

export default App;
