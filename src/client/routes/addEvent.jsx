import React from "react";
import { Form, redirect } from "react-router-dom";

export async function createEventAction({ request }) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);

  console.log(payload);

  try {
    const res = await fetch("/api/v1/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log(data.message);
    console.log(data.err);

    if (res.status === 200) {
      return redirect("/events");
    }
  } catch (err) {
    console.error(err);
  }

  return { ok: true };
}

export default function CreateEvent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-lg font-bold">Create an event</h2>

      <Form className="form-control" action="/CreateEvent" method="POST">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="input input-bordered flex items-center gap-2">
            Name
            {/* */}
            <input id="name" name="name" type="text" required className="grow" />
          </label>

          <label htmlFor="description" className="flex items-center gap-2">
            {/* */}
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            ></textarea>
          </label>

          <label htmlFor="date" className="input input-bordered flex items-center gap-2">
            Date
            {/* */}
            <input id="date" name="date" type="datetime-local" required className="grow" />
          </label>

          <label htmlFor="venue" className="input input-bordered flex items-center gap-2">
            Venue
            {/* */}
            <input id="venue" name="venue" type="text" required className="grow" />
          </label>

          <label htmlFor="maxAttendees" className="input input-bordered flex items-center gap-2">
            Max Attendees
            {/* */}
            <input id="maxAttendees" name="maxAttendees" type="number" required className="grow" />
          </label>

          <label htmlFor="ticketType" className="input input-bordered flex items-center gap-2">
            {/* */}
            <select name="ticketType" className="w-full max-w-xs" defaultValue={"Pick your ticket type"}>
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
            </select>
          </label>

          <label htmlFor="ticketPrice" className="input input-bordered flex items-center gap-2">
            Ticket Price
            {/* */}
            <input name="ticketPrice" type="number" required className="grow" />
          </label>

          <button type="submit" className="btn btn-primary">
            Create Event
          </button>
        </div>
      </Form>
    </div>
  );
}
