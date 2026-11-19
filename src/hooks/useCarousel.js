import { useCallback, useEffect, useState } from 'react';

// Shared carousel state: index + direction, autoplay with pause (hover/focus/drag), wrap-around.
export default function useCarousel(length, { interval = 4000, auto = true } = {}) {
  const [state, setState] = useState({ index: 0, dir: 1 });
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setState((s) => ({ index: (s.index + 1) % length, dir: 1 })), [length]);
  const prev = useCallback(() => setState((s) => ({ index: (s.index - 1 + length) % length, dir: -1 })), [length]);
  const go = useCallback((i) => setState((s) => ({ index: i, dir: i >= s.index ? 1 : -1 })), []);

  useEffect(() => {
    if (!auto || paused || length < 2) return undefined;
    const t = setTimeout(next, interval);
    return () => clearTimeout(t); // resets after every manual change too
  }, [auto, paused, length, interval, state.index, next]);

  return {
    index: state.index,
    dir: state.dir,
    next,
    prev,
    go,
    pause: () => setPaused(true),
    resume: () => setPaused(false),
  };
}
