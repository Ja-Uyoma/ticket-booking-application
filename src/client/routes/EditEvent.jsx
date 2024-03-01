import React from "react";
import { Form, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const eventID = params.eventID;
  const res = await fetch(`/api/v1/events/${eventID}`);
  const eventData = await res.json();
  return eventData;
}

export default function EditEvent() {
  const event = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-lg font-bold">Edit Event</h2>

      <Form className="form-control" action="/CreateEvent" method="POST">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="input input-bordered flex items-center gap-2">
            Name
            {/* */}
            <input id="name" name="name" type="text" required className="grow" defaultValue={event.name} />
          </label>

          <label htmlFor="description" className="flex items-center gap-2">
            {/* */}
            <textarea
              name="description"
              className="textarea textarea-bordered w-full"
              placeholder="Description"
              defaultValue={event.description}
            ></textarea>
          </label>

          <label htmlFor="date" className="input input-bordered flex items-center gap-2">
            Date
            {/* */}
            <input id="date" name="date" type="datetime-local" required className="grow" defaultValue={event.date} />
          </label>

          <label htmlFor="venue" className="input input-bordered flex items-center gap-2">
            Venue
            {/* */}
            <input id="venue" name="venue" type="text" required className="grow" defaultValue={event.venue} />
          </label>

          <label htmlFor="maxAttendees" className="input input-bordered flex items-center gap-2">
            Max Attendees
            {/* */}
            <input
              id="maxAttendees"
              name="maxAttendees"
              type="number"
              required
              className="grow"
              defaultValue={event.maxAttendees}
            />
          </label>

          <label htmlFor="ticketType" className="input input-bordered flex items-center gap-2">
            {/* */}
            <select name="ticketType" className="w-full max-w-xs" defaultValue={event.ticketType}>
              <option value="Regular">Regular</option>
              <option value="VIP">VIP</option>
            </select>
          </label>

          <label
            htmlFor="ticketPrice"
            className="input input-bordered flex items-center gap-2"
            defaultValue={event.ticketPrice}
          >
            Ticket Price
            {/* */}
            <input name="ticketPrice" type="number" required className="grow" />
          </label>

          <button type="submit" className="btn btn-primary">
            Edit Event
          </button>
        </div>
      </Form>
    </div>
  );
}
