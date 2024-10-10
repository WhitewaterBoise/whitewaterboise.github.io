import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID = "YOUR_CLIENT_ID"; // Your Google Client ID
const API_KEY = "YOUR_API_KEY"; // Your Google API Key
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

const GoogleCalendar= () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: "AIzaSyAn3KscPi6q8mmz8agKFrYsRT5T8HAYsJU",
          clientId: "1037166012504-h2qtj6789fpi2ugjvotdudsuia1c5vi9.apps.googleusercontent.com",
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
          scope: SCOPES,
        })
        .then(() => {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(setIsSignedIn);
          // Handle the initial sign-in state.
          setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const createEvent = () => {
    const event = {
      summary: "New Event Booking",
      location: "123 Main St",
      description: "This is a sample event.",
      start: {
        dateTime: "2024-10-02T10:00:00-07:00", // Format: YYYY-MM-DDTHH:mm:ss-HH:mm
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: "2024-10-02T11:00:00-07:00", // Format: YYYY-MM-DDTHH:mm:ss-HH:mm
        timeZone: "America/Los_Angeles",
      },
      attendees: [{ email: "attendee1@example.com" }, { email: "attendee2@example.com" }],
    };

    const request = gapi.client.calendar.events.insert({
      calendarId: "primary", // The user's primary calendar
      resource: event,
    });

    request.execute((event) => {
      alert(`Event created: ${event.htmlLink}`);
    });
  };

  return (
    <div>
      <h2>Google Calendar Booking</h2>
      <iframe src="https://calendar.google.com/calendar/embed?src=whitewaterboise%40gmail.com&ctz=America%2FBoise"  width="800" height="600" frameborder="0" ></iframe>
      {!isSignedIn ? (
        <button onClick={handleAuthClick}>Sign in with Google</button>
      ) : (
        <div>
          <button onClick={handleSignOutClick}>Sign out</button>
          <button onClick={createEvent}>Create Booking</button>
        </div>
      )}
    </div>
  );
};

export default GoogleCalendar;