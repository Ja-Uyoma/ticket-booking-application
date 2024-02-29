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
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">ticketpal</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
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
