export function Input({
  className,
  type = "text",
  id,
}: {
  id: string;
  type?: string;
  className?: string;
}) {
  return <input className={className} type={type} id={id} />;
}
