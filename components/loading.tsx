export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-42px)] -mt-23 overflow-x-hidden">
      {/* Spinner container */}
      <div className="relative flex items-center justify-center my-auto">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-14 w-14 border-4 border-orange-500 border-t-transparent" />

        {/* Logo centered inside spinner */}
        <img src="/favicon.ico" alt="logo" className="absolute h-5 w-5" />
      </div>
    </div>
  );
}
