import { useRef, useState, useEffect } from "react";

import { Rect } from "./Rect";

export const useImageRect = (): [React.RefObject<HTMLImageElement>, Rect | undefined, () => void] => {
  const [imageRect, setImageRect] = useState<Rect | undefined>();
  const ref = useRef<HTMLImageElement>(null);

  const onLoad = () => {
    setImageRect({
      left: 0,
      top: 0,
      width: ref.current ? ref.current.naturalWidth : 0,
      height: ref.current ? ref.current.naturalHeight : 0,
    });
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  }, []);

  return [ref, imageRect, onLoad];
};
