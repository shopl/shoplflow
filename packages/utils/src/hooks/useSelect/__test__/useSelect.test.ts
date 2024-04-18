import { describe, it, expect, vi } from 'vitest';
import { useSelect } from '../useSelect';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useSelect:Single', () => {
  const data = [
    { id: '1', name: 'test' },
    { id: '2', name: 'test2' },
    { id: '3', name: 'test3' },
  ];
  const result = { id: '1', name: 'test' };
  it('defaultValue에 객체값을 할당할 경우', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useSelect('SINGLE', data, {
        defaultSelected: [{ id: '1', name: 'test' }],
        key: 'id',
      }),
    );
    expect(current.selectedItem).toStrictEqual(result);
  });

  it('defaultValue에 id 리스트를 할당할 경우', () => {
    const {
      result: { current },
    } = renderHook(() =>
      useSelect('SINGLE', data, {
        defaultSelected: ['1'],
        key: 'id',
      }),
    );
    expect(current.selectedItem).toStrictEqual(result);
  });

  it('handleSelect에 id를 할당하여 선택한 경우', () => {
    const {
      result: { current: singleCurrent },
    } = renderHook(() =>
      useSelect('SINGLE', data, {
        defaultSelected: ['1'],
        key: 'id',
      }),
    );
    act(() => {
      singleCurrent.handleSelect('1');
    });
    expect(singleCurrent.selectedItem).toStrictEqual(result);
  });

  it('handleRemove에 id를 할당하여 선택을 해제한 경우', () => {
    const {
      result: { current: singleCurrent },
    } = renderHook(() =>
      useSelect('SINGLE', data, {
        key: 'id',
      }),
    );

    act(() => {
      singleCurrent.handleSelect('1');
    });

    act(() => {
      singleCurrent.handleRemove('1');
    });

    expect(singleCurrent.selectedItem).toBeNull();
  });

  it('handleReset을 호출하여 선택을 초기화한 경우', () => {
    const {
      result: { current: singleCurrent },
    } = renderHook(() =>
      useSelect('SINGLE', data, {
        key: 'id',
      }),
    );

    act(() => {
      singleCurrent.handleSelect('1');
    });

    act(() => {
      singleCurrent.handleReset();
    });
    expect(singleCurrent.selectedItem).toBeNull();
  });

  it('handleToggleSelect을 호출하여 선택을 토글한 경우', async () => {
    const {
      result: { current: singleCurrent },
    } = renderHook(() =>
      useSelect('SINGLE', data, {
        key: 'id',
        defaultSelected: ['1'],
      }),
    );
    await vi.waitFor(() => singleCurrent.selectedItem !== null, {
      timeout: 1000, // default is 1000
      interval: 20, // default is 50
    });

    act(() => {
      singleCurrent.handleToggleSelect('1');
    });

    expect(singleCurrent.selectedItem).toStrictEqual(result);
  });
});

describe('useSelect:Multi', () => {
  const data = [
    { id: '1', name: 'test' },
    { id: '2', name: 'test2' },
    { id: '3', name: 'test3' },
  ];
  const result = [{ id: '1', name: 'test' }];
  it('defaultValue에 객체값을 할당할 경우', async () => {
    const {
      result: { current },
    } = renderHook(() =>
      useSelect('MULTI', data, {
        defaultSelected: result,
        key: 'id',
        max: 3,
      }),
    );
    await vi.waitFor(() => current.selectedItem !== null, {
      timeout: 1000, // default is 1000
      interval: 20, // default is 50
    });
    expect(current.selectedItem).toStrictEqual(result);
  });

  it('defaultValue에 id 리스트를 할당할 경우', async () => {
    const {
      result: { current },
    } = renderHook(() =>
      useSelect('MULTI', data, {
        defaultSelected: ['1'],
        key: 'id',
        max: 3,
      }),
    );
    await vi.waitFor(() => current.selectedItem !== null, {
      timeout: 1000, // default is 1000
      interval: 20, // default is 50
    });
    expect(current.selectedItem).toStrictEqual(result);
  });

  it('최대값을 넘겨서 선택할 경우', async () => {
    const {
      result: { current },
    } = renderHook(() =>
      useSelect('MULTI', data, {
        defaultSelected: ['1'],
        key: 'id',
        max: 1,
      }),
    );
    await vi.waitFor(() => current.selectedItem !== null, {
      timeout: 1000, // default is 1000
      interval: 20, // default is 50
    });

    act(() => {
      current.handleSelect('2');
    });

    expect(current.selectedItem).toStrictEqual(result);
  });
});
