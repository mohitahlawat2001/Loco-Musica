const CardShimmer = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-2 w-64 m-2">
      <div className="animate-pulse flex flex-col space-x-4">
        <div className="bg-slate-400 h-40 w-full"></div>
        <div className="flex-1 space-y-6 p-2 m-2">
          <div className="h-2 bg-slate-500 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-600 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mx-20" data-testid="shimmer">
      {[...Array(20)].map((_, index) => (
        <CardShimmer key={index} />
      ))}
    </div>
  );
};

export const RestaurantShimmer = () => {
  return (
    <div className="mx-2 bg-pink-300 text-white p-4 rounded-lg mt-1 animate-shimmer">
      <div className="h-8 mb-4 bg-gray-300 rounded"></div>
      <div className="h-6 mb-2 bg-gray-300 rounded"></div>
      <div className="w-72 h-72 mb-2 bg-gray-300 rounded-md overflow-hidden "></div>
      <div className="h-6 mb-2 bg-gray-300 rounded"></div>
      <div className="h-6 mb-2 bg-gray-300 rounded"></div>
      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="mx-3 bg-gray-800 text-white p-4 rounded-lg mt-1 animate-shimmer w-full">
      <div className="h-8 m-4 bg-gray-300 rounded grid-cols-1 "></div>
      <ul>
        {[...Array(9)].map((_, index) => (
          <li key={index} className="m-4">
            <div className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-slate-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                      <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const RecipeShimmer = () => {
  return (
    <div className="animate-pulse bg-gradient-to-r from-pink-200 via-pink-400 to-pink-600 shadow-lg p-10 m-10 flex justify-between border border-pink-200 border-r-2 border-b-4 rounded-tl-xl rounded-br-xl">
      <div className="flex-1 space-y-6 p-2 m-2">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-pink-600 rounded col-span-2"></div>
            <div className="h-2 bg-pink-700 rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-pink-700 rounded"></div>
          <div className="h-2 bg-pink-700 rounded"></div>
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-pink-600 rounded col-span-1"></div>
            <div className="h-2 bg-pink-600 rounded col-span-2"></div>
            <div className="h-2 bg-pink-700 rounded col-span-1"></div>
            <div className="h-2 bg-pink-600 rounded col-span-1"></div>
            <div className="h-2 bg-pink-600 rounded col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FallbackShimmer = () => (
  <div className="animate-pulse p-10 m-10 ">
    {Array.from({ length: 2 }).map((_, index) => (
      <div>
        <div
          key={index}
          className={`bg-gray-300 h-4 mb-2 mx-auto rounded w-${Math.floor(
            Math.random() * 5
          )}/5`}
        ></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 2 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-300 h-4 w-full mb-2 rounded"
            ></div>
          ))}
        </div>
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={`bg-gray-300 h-4 mb-2 mx-auto rounded w-${Math.floor(
              Math.random() * 5
            )}/5`}
          ></div>
        ))}
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-300 h-4 w-full mb-2 rounded"
          ></div>
        ))}
      </div>
    ))}
  </div>
);

export default Shimmer;
