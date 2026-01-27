import { renderHook, waitFor } from '@testing-library/react';
import { useGreeting } from './hooks';
import { fetchGreeting } from './queries';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock the fetchGreeting function
vi.mock('./queries', () => ({
  fetchGreeting: vi.fn(),
}));

describe('useGreeting hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return loading state initially', () => {
    vi.mocked(fetchGreeting).mockResolvedValue(null);

    const { result } = renderHook(() => useGreeting());

    expect(result.current.loading).toBe(true);
    expect(result.current.greeting).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should return greeting data when fetch is successful', async () => {
    const mockGreeting = {
      id: 1,
      message: 'Hello from Supabase',
      created_at: '2023-01-01T00:00:00Z',
      updated_at: '2023-01-01T00:00:00Z'
    };

    vi.mocked(fetchGreeting).mockResolvedValue(mockGreeting);

    const { result } = renderHook(() => useGreeting());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.greeting).toEqual(mockGreeting);
      expect(result.current.error).toBeNull();
    });
  });

  it('should return default greeting when fetch returns null', async () => {
    vi.mocked(fetchGreeting).mockResolvedValue(null);

    const { result } = renderHook(() => useGreeting());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.greeting?.message).toBe('Hello Next');
      expect(result.current.error).toBeNull();
    });
  });

  it('should handle errors gracefully', async () => {
    const mockError = new Error('Network error');
    vi.mocked(fetchGreeting).mockRejectedValue(mockError);

    const { result } = renderHook(() => useGreeting());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.greeting?.message).toBe('Hello Next');
      expect(result.current.error).toBe(mockError);
    });
  });
});
