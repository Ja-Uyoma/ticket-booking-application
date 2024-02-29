import React from "react";

function App() {
  return (
    <>
      <Header />
      <Main />
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
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Welcome to ticketpal, your gateway to hassle-free event experiences! Discover, book, and indulge in
              unforgettable moments with just a few clicks. Whether you&apos;re craving front-row seats at concerts,
              thrilling sports matches, or captivating theater performances, we&apos;ve got you covered. Dive into a
              world of endless entertainment possibilities, where convenience meets excitement. Let&apos;s turn your
              dreams into reality, one ticket at a time. Start your journey with TicketEase today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
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
