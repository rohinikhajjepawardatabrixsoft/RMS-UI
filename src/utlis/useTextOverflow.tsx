import React from 'react';

const useTextOverflow = <T extends HTMLElement>(): {
  node?: T | null;
  ref: (n: T | null) => void;
  overflowing: boolean;
} => {
  const [node, setNode] = React.useState<T | null>();
  const [overflowing, setOverflowing] = React.useState(false);
  const ref = React.useCallback((n: T | null) => setNode(n), []);

  React.useEffect(() => {
    if (!node) return;
    const observer = new ResizeObserver(() => {
      setOverflowing(node.offsetWidth < node.scrollWidth);
    });
    observer.observe(node);
    // eslint-disable-next-line consistent-return
    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [node]);

  return { node, ref, overflowing };
};

export default useTextOverflow;
