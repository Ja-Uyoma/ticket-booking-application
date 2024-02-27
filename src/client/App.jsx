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
    <div className="flex justify-around text-lg bg-blue-600 text-white p-4">
      <header>
        <h1 className="font-bold text-2xl italic">TicketPal</h1>
      </header>
      <div className="flex justify-between gap-2">
        <div>
          <a href="/" className="hover:cursor-pointer hover:bg-blue-900">
            Concerts
          </a>
        </div>
        <div>
          <a href="/" className="hover:cursor-pointer hover:bg-blue-900">
            Sports
          </a>
        </div>
        <div>
          <a href="/" className="hover:cursor-pointer hover:bg-blue-900">
            Arts & Theater
          </a>
        </div>
        <div>
          <a href="/" className="hover:cursor-pointer hover:bg-blue-900">
            Family
          </a>
        </div>
      </div>
      <div>
        <a href="/" className="hover:cursor-pointer hover:bg-blue-900">
          Sign In/Register
        </a>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="flex justify-center bg-blue-600 py-4">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search..."
        required
        className="w-1/3 p-2 placeholder:p-4"
      />
      <button type="submit" className="bg-blue-600 text-white border-4 border-white px-3">
        Search
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <p className="text-white text-center">
        Copyright &copy; <span>2024</span> TicketPal. All rights reserved{" "}
      </p>
    </footer>
  );
}

export default App;
