// Placeholder to host a component
import React from "react";

const Hours = () => {
    const shelterHours = {
        Monday: "10:00 - 16:00",
        Tuesday: "10:00 - 16:00",
        Wednesday: "10:00 - 16:00",
        Thursday: "10:00 - 16:00",
        Friday: "10:00 - 16:00",
        Saturday: "9:00 - 20:00",
        Sunday: "9:00 - 20:00",
    };

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const todayHours = shelterHours[today] || "Closed";

    return (
        <div id="hours">
            <h2>Horario de atención </h2>
            <p>{today} {todayHours}</p>
        </div>
    );
};

export default Hours;