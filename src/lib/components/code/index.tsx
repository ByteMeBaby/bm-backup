export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="        text-sm
  bg-gray-100
  text-gray-900
  rounded-md
  p-2
  font-mono
  break-all
  whitespace-pre-wrap
  w-full
  max-w-full
  overflow-auto"
    >
      {children}
    </div>
  );
}
