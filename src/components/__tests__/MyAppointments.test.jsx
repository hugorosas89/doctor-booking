import { render, screen } from '@testing-library/react';
import MyAppointments from '../MyAppointments';
import { describe, it, expect } from 'vitest';

describe('MyAppointments', () => {
  it('displays "No appointments yet" when list is empty', () => {
    render(<MyAppointments appointments={[]} />);
    expect(screen.getByText(/no appointments yet/i)).toBeTruthy();
  });
});
