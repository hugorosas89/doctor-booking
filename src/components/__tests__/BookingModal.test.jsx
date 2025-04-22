import { render } from '@testing-library/react';
import BookingModal from '../BookingModal';
import { describe, it, expect } from 'vitest';

describe('BookingModal', () => {
  it('does not render when isOpen is false', () => {
    const { queryByRole } = render(
      <BookingModal
        isOpen={false}
        doctor={null}
        onClose={() => {}}
        onConfirm={() => {}}
      />
    );
    expect(queryByRole('dialog')).toBeNull();
  });
});
