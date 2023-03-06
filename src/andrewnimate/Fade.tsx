import React, { useEffect } from "react";

type FadeAnimationProps = {
  interval: number;
  initialOpacity: number;
  targetOpacity: number;
  increment: number;
  type: "fadein" | "fadeout";
  afterAll?: () => void;
  beforeAll?: () => void;
};

export default function AndrewFade({
  children,
  props,
}: {
  children: React.ReactNode;
  props: FadeAnimationProps;
}) {
  const node: number = Math.floor(Math.random() * 9999);

  useEffect(() => {
    const el: HTMLDivElement = document.querySelector(`#andrew-fade-${node}`)!;
    let opacity: number = props.initialOpacity;

    if (props.beforeAll) props.beforeAll();

    el.style.opacity = String(opacity);

    const animation = setInterval(() => {
      opacity += props.increment;

      el.style.opacity = String(opacity);

      if (props.type === "fadeout" && opacity <= props.targetOpacity) {
        if (props.afterAll) props.afterAll();
        clearInterval(animation);
      }
      if (props.type === "fadein" && opacity >= props.targetOpacity) {
        clearInterval(animation);
        if (props.afterAll) props.afterAll();
      }
    }, props.interval);
  });

  return <div id={`andrew-fade-${node}`}>{children}</div>;
}
