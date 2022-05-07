import { useState } from "react";

function useTouch() {
  const [scrollLeft, setScrollLeft] = useState(false);
  const [startPoint, setStartPoint] = useState(0);
  const [element, setElement] = useState(null);
  const [coord, setCoord] = useState(0);
  const [walk, setWalk] = useState(0);

  const touchDown = (e) => {
    setStartPoint(e.changedTouches[0].pageX - element.offsetLeft);
    setScrollLeft(element.scrollLeft);
  };

  const touchUp = (e) => {
    setCoord(e.changedTouches[0].pageX - element.offsetLeft);
    setWalk(coord - startPoint);
    // element.;
  };

  return [touchDown, touchUp, coord, setElement];
}

export default useTouch;
