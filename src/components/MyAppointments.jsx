export default function MyAppointments({ appointments }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-center text-gray-600">No appointments yet.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((appt, idx) => (
            <div
              key={idx}
              role="group"
              tabIndex={0}
              aria-label={`Appointment with ${appt.doctorName} on ${appt.date} at ${appt.time}`}
              className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
              <h3 className="font-semibold text-lg">{appt.doctorName}</h3>
              <p className="text-sm text-gray-600">{appt.specialty}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mt-2">
                <p className="text-sm">
                  <strong>Date:</strong> {appt.date}
                </p>
                <p className="text-sm">
                  <strong>Time:</strong> {appt.time}
                </p>
                <p className="text-sm">
                  <strong>Location:</strong> {appt.location}
                </p>
              </div>
              <p className="text-sm mt-2">
                <strong>Booked for</strong> {appt.userName} ({appt.userEmail})
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
