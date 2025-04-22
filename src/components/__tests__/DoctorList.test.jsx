import { render, screen } from '@testing-library/react';
import DoctorList from '../DoctorList';

test('DoctorList > renders doctor cards and allows filtering', () => {
  render(<DoctorList onBook={vi.fn()} />);

  const specialtyFilter = screen.getByLabelText(/filter by specialty/i);
  const dayFilter = screen.getByLabelText(/filter by available day/i);

  expect(specialtyFilter).toBeInTheDocument();
  expect(dayFilter).toBeInTheDocument();

  const doctorCards = screen.getAllByRole('img', { name: /image of/i });
  expect(doctorCards.length).toBeGreaterThan(0);
});
