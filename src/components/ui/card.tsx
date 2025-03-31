import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer"; // Import the Intersection Observer hook

function Card({ className, ...props }: React.ComponentProps<"div">) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the effect only once when the element is in the viewport
    threshold: 0.1, // Element is considered in view if 10% of it is visible
  });

  return (
    <div
      ref={ref} // Add the ref to the container
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      style={{
        opacity: inView ? 1 : 0, // Fade-in effect when it enters the viewport
        transition: "opacity 0.5s ease-out", // Smooth transition
      }}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn("px-6", className)}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn("flex items-center px-6", className)}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
