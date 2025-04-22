import { useState } from 'react';
import DoctorList from './components/DoctorList';
import MyAppointments from './components/MyAppointments';

function App() {
  const [tab, setTab] = useState('doctors');
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = (appt) => {
    setAppointments((prev) => [...prev, appt]);
  };
  return (
    <div className="min-h-screen bg-gray-100 px-4">
      <header className="bg-blue-600 text-white py-4 text-center text-xl font-bold">
        Healthcare Platform
      </header>

      <div
        className="flex flex-col sm:flex-row justify-center mt-4 sm:space-x-4 space-y-2 sm:space-y-0"
        role="tablist"
        aria-label="Main navigation tabs">
        <button
          id="tab-doctors"
          role="tab"
          aria-controls="panel-doctors"
          aria-selected={tab === 'doctors'}
          className={`px-4 py-2 rounded-md font-medium ${
            tab === 'doctors'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border'
          }`}
          onClick={() => setTab('doctors')}>
          Find a Doctor
        </button>
        <button
          id="tab-appointments"
          role="tab"
          aria-controls="panel-appointments"
          aria-selected={tab === 'appointments'}
          className={`px-4 py-2 rounded-md font-medium ${
            tab === 'appointments'
              ? 'bg-blue-600 text-white'
              : 'bg-white text-blue-600 border'
          }`}
          onClick={() => setTab('appointments')}>
          My Appointments
        </button>
      </div>

      <main className="mt-6 max-w-screen-md mx-auto">
        {tab === 'doctors' ? (
          <div
            id="panel-doctors"
            role="tabpanel"
            aria-labelledby="tab-doctors"
            tabIndex={0}>
            <DoctorList onBook={handleAddAppointment} />
          </div>
        ) : (
          <div
            id="panel-appointments"
            role="tabpanel"
            aria-labelledby="tab-appointments"
            tabIndex={0}>
            <MyAppointments appointments={appointments} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
