import React from "react";
import { Form } from "react-router-dom";

export default function AddEvent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-lg font-bold">Create an event</h2>

      <Form className="form-control" action="/register" method="POST">
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
            <input id="date" name="date" type="date" required className="grow" />
          </label>

          <label htmlFor="venue" className="input input-bordered flex items-center gap-2">
            Venue
            {/* */}
            <input id="venue" name="venue" type="text" required className="grow" />
          </label>

          <label htmlFor="maxAttendees" className="input input-bordered flex items-center gap-2">
            Max Attendees
            {/* */}
            <input id="maxAttendees" name="max-attendees" type="number" required className="grow" />
          </label>

          <label htmlFor="ticketType" className="input input-bordered flex items-center gap-2">
            {/* */}
            <select name="ticketType" className="w-full max-w-xs">
              <option disabled selected>
                Pick your ticket type
              </option>
              <option value="">Regular</option>
              <option value="">VIP</option>
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
