import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  test('renders Button component', () => {
    render(
      <Button
        alignmentStyle="testStyle"
        value="this is button"
      />
    );

    screen.debug();
  });
});
