// Footer.tsx
import React from "react";
import { twMerge } from "tailwind-merge";

interface FooterProps {
  children: React.ReactNode;
  wrapperClasses?: string;
  align?: "left" | "right" | "evenly" | "between";
  multiContainer?: boolean;
}

export function Footer({
  children,
  wrapperClasses,
  align = "evenly",
  multiContainer = false,
}: FooterProps) {
  if (multiContainer) {
    const childrenArray = React.Children.toArray(children);
    const numChildren = childrenArray.length;

    return (
      <div className={twMerge("flex w-full", wrapperClasses)}>
        {childrenArray.map((child, index) => {
          // Gen class names based on the child's position
          let borderClasses = "border-t p-3";

          // Add right border except for the last child
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
    );
  }
  // Single container
  const justifyContentClass = {
    left: "justify-start",
    right: "justify-end",
    evenly: "justify-evenly",
    between: "justify-between",
  }[align];

  const childrenArray = React.Children.toArray(children);
  const numChildren = childrenArray.length;

  return (
    <div
      className={twMerge(
        `flex w-full ${justifyContentClass} items-center p-3 border-t`,
        wrapperClasses
      )}
    >
      {childrenArray.map((child, index) => {
        let marginClass = "";
        if (align === "left" && index < numChildren - 1) {
          marginClass = "mr-2"; // Adjust margin as needed
        } else if (align === "right" && index > 0) {
          marginClass = "ml-2"; // Adjust margin as needed
        }
        return (
          <div key={index} className={twMerge(marginClass)}>
            {child}
          </div>
        );
      })}
    </div>
  );
}
