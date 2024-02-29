import React from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/login`} className="hover:cursor-pointer hover:bg-blue-900">
          Sign In/Register
        </Link>
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
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}

export default App;
