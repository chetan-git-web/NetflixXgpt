const Shimmer = () => (
    <div>
        <div
            className="flex flex-wrap gap-[30px]  px-[210px] pt-[20px]"
            key="shimmer"
        >
            {Array(4)
                .fill("")
                .map((e) => (
                    <div className="w-[18rem] h-[10rem] bg-gray-200"></div>
                ))}
        </div>
    </div>
);
export default Shimmer;
