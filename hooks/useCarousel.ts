import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export interface UseCarouselOptions {
  initIndex?: number;
  isLoop?: boolean;
}

export type SetIndex = (index: number) => void;
export type Next = () => void;
export type Prev = () => void;

export interface UseCarouselData<T> {
  selectedIndex: number;
  selectedItem: T;
  setIndex: SetIndex;
  next: Next;
  prev: Prev;
  canSelectNext: boolean;
  canSelectPrev: boolean;
}

type RequiredUseCarouselOptions = Required<UseCarouselOptions>;
const defaultCarouselOptions: RequiredUseCarouselOptions = {
  initIndex: 0,
  isLoop: false,
};

function useCarousel<T>(
  items: T[],
  options: UseCarouselOptions = defaultCarouselOptions,
): UseCarouselData<T> {
  const optionsToUse = useMemo<RequiredUseCarouselOptions>(
    () => ({ ...defaultCarouselOptions, ...options }),
    [],
  );

  const [selectedIndex, setSelectedIndex] = useState(optionsToUse.initIndex);

  const upToDateSelectedItem = items[selectedIndex];
  const deferredSelectedItem = useDeferredValue(upToDateSelectedItem);

  const selectedItem = upToDateSelectedItem || deferredSelectedItem;

  const selectedIndexRef = useRef(selectedIndex);
  const itemsAmountRef = useRef(items.length);

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

  useEffect(() => {
    itemsAmountRef.current = items.length;
  }, [items.length]);

  const setIndex = useCallback<SetIndex>(
    index => {
      setSelectedIndex(curr => {
        if (index === curr) return curr;

        function clampValue(min: number, value: number, max: number): number {
          return Math.max(Math.min(value, max), min);
        }

        const isForward = index > curr;
        const isBack = index < curr;

        const minIndex = 0;
        const maxIndex = itemsAmountRef.current - 1;

        if (optionsToUse.isLoop) {
          if (isForward && index > maxIndex) return minIndex;
          if (isBack && index < minIndex) return maxIndex;
        } else {
          return clampValue(minIndex, index, maxIndex);
        }

        return index;
      });
    },
    [optionsToUse.isLoop],
  );

  const next = useCallback<Next>(() => {
    setIndex(selectedIndexRef.current + 1);
  }, [setIndex]);

  const prev = useCallback<Prev>(() => {
    setIndex(selectedIndexRef.current - 1);
  }, [setIndex]);

  const minIndex = 0;
  const maxIndex = itemsAmountRef.current - 1;

  const canSelectNext = optionsToUse.isLoop || selectedIndex < maxIndex;
  const canSelectPrev = optionsToUse.isLoop || selectedIndex > minIndex;

  return {
    selectedIndex,
    selectedItem,
    setIndex,
    next,
    prev,
    canSelectNext,
    canSelectPrev,
  };
}

export default useCarousel;
