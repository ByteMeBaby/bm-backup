export function Label({
  children,
  htmlFor,
  className,
}: {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}) {
  return (
    <label className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
}
