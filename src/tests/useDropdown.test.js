/**
 * @jest-environment jsdom
 */

/*
from docs:
NOTE: There's a gotcha with updates.
 renderHook mutates the value of current when updates 
 happen so you cannot destructure its values as the
 assignment will make a copy locking into the value at 
 that time.
*/

import 'jest';
import { renderHook, act } from '@testing-library/react-hooks';
import { useDropdown } from '../components/hooks/useDropdown';

describe('test dropdown hook', () => {
  test('toggle is default false', () => {
    const { result } = renderHook(() => useDropdown());
    const [_, toggle] = result.current;
    expect(toggle).toBe(false);
  });

  test('set toggle to true', () => {
    const { result } = renderHook(() => useDropdown());

    act(() => {
      const updateState = result.current[2];
      updateState(true);
    });

    expect(result.current[1]).toBe(true);
  });
});
