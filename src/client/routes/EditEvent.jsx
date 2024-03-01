import React from "react";
import { Form, useLoaderData, redirect } from "react-router-dom";

export async function loader({ params }) {
  const eventID = params.eventID;
  const res = await fetch(`/api/v1/events/${eventID}`);
  const eventData = await res.json();
  return eventData;
}

export async function action({ params, request }) {
  const eventID = params.eventID;
  const formData = await request.formData();
  let intent = formData.get("intent");

  if (intent === "editEvent") {
    const payload = Object.fromEntries(formData);

    console.log(payload);

    try {
      const res = await fetch(`/api/v1/events/${eventID}`, {
        method: "PATCH",
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
  }

  if (intent === "deleteEvent") {
    const payload = Object.fromEntries(formData);

    console.log(payload);

    try {
      const res = await fetch(`/api/v1/events/${eventID}`, {
        method: "DELETE",
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
  }

  return { ok: true };
}

export default function EditEvent() {
  const event = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-lg font-bold">Edit Event</h2>

      <Form className="form-control" action="" method="PATCH">
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

          <label htmlFor="ticketPrice" className="input input-bordered flex items-center gap-2">
            Ticket Price
            {/* */}
            <input name="ticketPrice" type="number" required className="grow" defaultValue={event.ticketPrice} />
          </label>

          <div className="flex flex-row justify-between">
            <button type="submit" name="intent" value="deleteEvent" className="btn btn-primary">
              Delete Event
            </button>
            <button type="submit" name="intent" value="editEvent" className="btn btn-primary">
              Edit Event
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
