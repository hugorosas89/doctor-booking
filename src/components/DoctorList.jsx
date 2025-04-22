import { useState } from 'react';
import BookingModal from './BookingModal';

import doctors from '../mock/doctors';

export default function DoctorList({ onBook }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredDoctors = doctors.filter((doc) => {
    const matchSpecialty = selectedSpecialty
      ? doc.specialty === selectedSpecialty
      : true;
    const matchDay = selectedDay ? doc.days.includes(selectedDay) : true;
    return matchSpecialty && matchDay;
  });

  const handleBookClick = (doctor) => {
    setBookingDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleConfirmBooking = (bookingData) => {
    onBook(bookingData);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <h2 className="text-2xl font-bold text-center mb-6">Find a Doctor</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          aria-label="Filter by specialty"
          className="w-full sm:w-auto p-2 border rounded-md focus:ring focus:ring-blue-200">
          <option value="">All Specialties</option>
          {[...new Set(doctors.map((d) => d.specialty))].map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          aria-label="Filter by available day"
          className="p-2 border rounded-md focus:ring focus:ring-blue-200">
          <option value="">All Days</option>
          {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(
            (day) => (
              <option key={day} value={day}>
                {day}
              </option>
            )
          )}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.length ? (
          filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <img
                src={doc.photo}
                alt={`Image of ${doc.name}`}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">{doc.name}</h3>
              <p className="text-sm text-gray-600 text-center">
                {doc.specialty}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {doc.availability}
              </p>
              <p className="text-sm text-gray-500 mt-1 text-center">
                {doc.location}
              </p>
              <div className="mt-4 text-center">
                <button
                  onClick={() => handleBookClick(doc)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
                  Book Appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No doctors match the selected filters.
          </p>
        )}
      </div>

      <BookingModal
        doctor={bookingDoctor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}
