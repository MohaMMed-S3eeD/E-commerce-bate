const CardSkeleton = () => {
  return (
    <div className="bg-[#3A4A2D] rounded-lg shadow-md overflow-hidden border border-[#2C3A22] max-w-[300px] animate-pulse">
      <div className="relative h-[150px] sm:h-[200px] bg-[#2C3A22]"></div>
      <div className="p-2 sm:p-3">
        <div className="h-5 bg-[#2C3A22] rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-[#2C3A22] rounded w-full mb-4"></div>
        <div className="w-full h-[34px] sm:h-[40px] bg-[#2C3A22] rounded-md"></div>
      </div>
    </div>
  );
};

export default CardSkeleton;
