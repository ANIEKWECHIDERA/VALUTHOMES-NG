// components/AgentLoadingSkeleton.tsx
export default function AgentLoadingSkeleton() {
  return (
    <div className="max-w-4xl mx-auto animate-pulse my-6 p-6">
      <div className="h-12 bg-gray-300 rounded mb-6"></div> {/* Breadcrumb */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="h-64 bg-gray-300 rounded-lg"></div>
          <div className="h-8 bg-gray-300 rounded mt-4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mt-2 w-1/2"></div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-4"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-16 bg-gray-300 rounded"></div>
            <div className="h-16 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="h-8 bg-gray-300 rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="h-32 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-300 rounded"></div>
          <div className="h-32 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
