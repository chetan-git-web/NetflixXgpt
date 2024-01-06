const Shimmer = () => (
    <div>
        <div
            className="flex  gap-[30px]  px-[20px] pt-[20px] "
            key="shimmer"
        >
            {Array(10)
                .fill("")
                .map((e) => (
                    <div className="w-[8rem] smartphone:w-[9rem] tablet:w-[10rem] laptop:w-[11rem] desktop:w-[12rem] h-[10rem] smartphone:h-[11rem] tablet:h-[12rem] laptop:h-[13rem] desktop:h-[14rem] bg-gray-200"></div>
                ))}
        </div>
    </div>
);
export default Shimmer;
