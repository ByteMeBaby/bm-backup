import React from "react";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  children?: React.ReactNode;
  actionWrapperClasses?: string;
  align?: "left" | "right" | "evenly" | "between";
  borderd?: boolean;
  actions?: React.ReactNode;
  wrapperClasses?: string;
  el?: "footer" | "div" | "header" | "aside" | "span";
  style?: React.CSSProperties;
}

export default function Footer({
  children,
  actionWrapperClasses,
  align = "evenly",
  borderd = false,
  actions,
  wrapperClasses,
  style,
  el: El = "footer",
}: FooterProps) {
  if (borderd) {
    const childrenArray = React.Children.toArray(actions);
    const numChildren = childrenArray.length;

    return (
      <El className={twMerge(wrapperClasses)} style={style}>
        <div className={twMerge("flex w-full", actionWrapperClasses)}>
          {childrenArray.map((child, index) => {
            let borderClasses = "border-t p-3";

            if (index !== numChildren - 1) {
              borderClasses += " border-r";
            }

            return (
              <div
                key={index}
                className={twMerge(
                  "flex flex-1 justify-center items-center",
                  borderClasses
                )}
              >
                {child}
              </div>
            );
          })}
        </div>
        {children}
      </El>
    );
  }

  const justifyContentClass = {
    left: "justify-start",
    right: "justify-end",
    evenly: "justify-evenly",
    between: "justify-between",
  }[align];

  const childrenArray = React.Children.toArray(actions);
  const numChildren = childrenArray.length;

  return (
    <El className={twMerge(wrapperClasses)} style={style}>
      <div
        className={twMerge(
          `flex w-full items-center p-3 border-t ${justifyContentClass}`,
          actionWrapperClasses
        )}
      >
        {childrenArray.map((child, index) => {
          let marginClass = "";
          if (align === "left" && index < numChildren - 1) {
            marginClass = "mr-2";
          } else if (align === "right" && index > 0) {
            marginClass = "ml-2";
          }
          return (
            <div key={index} className={twMerge(marginClass)}>
              {child}
            </div>
          );
        })}
      </div>
      {children}
    </El>
  );
}
