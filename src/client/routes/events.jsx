import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";

export async function eventsLoader() {
  const res = await fetch("/api/v1/events");
  const events = await res.json();
  return events;
}

export async function logoutAction({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  try {
    const res = await fetch("/api/v1/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      return redirect("/");
    }
  } catch (err) {
    console.log(err);
  }

  return { ok: true };
}

export default function Events() {
  const events = useLoaderData();
  console.log(events);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          </div>
          <a href="/addEvent" className="btn btn-ghost text-xl">
            Add Event
          </a>
        </div>
        <div className="navbar-end">
          <Form action="/" method="get">
            <button type="submit" className="btn">
              Logout
            </button>
          </Form>
        </div>
      </div>

      {/**/}
      <div className="grid grid-cols-3 gap-2">
        {events.length ? (
          events.map((event) => {
            return (
              <div className="card w-96 bg-base-100 shadow-xl" key={event.id}>
                <div className="card-body">
                  <h2 className="card-title">{event.name}</h2>
                  <p>{event.description}</p>
                  <p>{event.venue}</p>
                  <p>{new Date(event.date).toLocaleString()}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Event</button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No events</p>
        )}
      </div>
    </div>
  );
}
