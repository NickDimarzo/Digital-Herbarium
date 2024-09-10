export default function LoadingBlock() {
  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center px-8 pt-10">
        <p>Hang tight This may take a few minutes.</p>
      </div>
      <div className="flex justify-center px-8 pt-10">
        <p>We are building your Herbarium now!</p>
      </div>
      <div className="flex justify-center px-8 pt-10">
        <button
          type="button"
          className="bg-dark-blue text-gray-50 px-10 font-mono m-8 py-4 rounded-3xl animate-pulse"
          disabled
        >
          Loading...
        </button>
      </div>
    </div>
  );
}
