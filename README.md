# 🏥 Healthcare Appointment Platform

A simple and accessible platform to find doctors and book medical appointments, built with **React**, **Vite**, **Tailwind CSS**, and **Jest + Testing Library**.

---

## 🚀 Setup Instructions

1. **Clone the repository**

```
git clone https://github.com/hugorosas89/doctor-booking.git
cd doctor-booking
```

2. **Install dependencies**
```
npm install
```
3. **Run the development server**
```
npm run dev
```
4. **Run tests**
```
npm run test
```
*Make sure you're using Node.js 18+ for best compatibility.*

 🧪 **Testing**
 
This project uses Jest and React Testing Library.
```
Run all tests: npm run test
Watch mode: npm run test:watch
View coverage: npm run test -- --coverage
```
---
## ♿ Accessibility

All components are keyboard navigable.
```
Basic ARIA roles, labels, and landmarks are implemented.
Passes checks in tools like Lighthouse and axe DevTools.
```
---
## 🧠 How I Used AI Tools in This Project
This project was developed with the support of AI tools, specifically ChatGPT, to accelerate development, improve accessibility, and ensure code quality. Here’s how AI was used throughout the process:
```
✍️ Code Assistance

Helped scaffold core components like DoctorList, BookingModal, and MyAppointments in React with Tailwind CSS.
Assisted in implementing keyboard accessibility and ARIA attributes to ensure usability for all users.

🎨 UI/UX and Accessibility

Improved keyboard navigation (e.g., ensuring modals were focus-trapped and tabbable).
Provided accessible markup using appropriate role, aria-label, and aria-describedby attributes.
Guided compliance with tools like Lighthouse and axe DevTools.

🧪 Testing

Helped write unit tests using Jest and React Testing Library, ensuring components rendered properly and behaved correctly (e.g., modals opening/closing, filters working).
Diagnosed test failures and suggested corrections based on error logs.
```
---
## ⚠️ Known Limitations / Next Steps
```
Data is not persisted — everything is in-memory only.
No backend/API integration yet.
No form validation beyond basic HTML5 required fields.
Add unit tests for more edge cases and error states.
Improve responsiveness for very small screens.
Add login/authentication in future iterations.
```
