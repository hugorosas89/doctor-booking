import { useEffect, useState } from 'react';

export default function BookingModal({ doctor, isOpen, onClose, onConfirm }) {
  const [selectedSlot, setSelectedSlot] = useState('');
  const [form, setForm] = useState({ name: '', email: '', date: '' });

  useEffect(() => {
    if (isOpen) {
      document.getElementById('name')?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen || !doctor) return null;

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert('Please select a time slot.');
      return;
    }

    const appointment = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      location: doctor.location,
      date: form.date,
      time: selectedSlot,
      userName: form.name,
      userEmail: form.email,
    };

    onConfirm(appointment);
    alert(
      `Appointment booked on ${form.date} with ${doctor.name} at ${selectedSlot}`
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-title"
      aria-describedby="booking-description">
      <div className="flex min-h-screen items-start justify-center py-10 px-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={onClose}
            aria-label="Close booking form">
            &times;
          </button>

          <div className="p-6">
            <h2
              id="booking-title"
              className="text-xl font-semibold mb-1 text-center">
              Book with {doctor.name}
            </h2>
            <p
              id="booking-description"
              className="text-sm text-gray-600 text-center mb-4">
              {doctor.specialty} — {doctor.location}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium">
                  Date
                </label>
                <input
                  required
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Select a Time Slot
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {doctor.slots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      tabIndex="0"
                      role="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2 border rounded-md text-sm ${
                        selectedSlot === slot
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                      aria-pressed={selectedSlot === slot}>
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
