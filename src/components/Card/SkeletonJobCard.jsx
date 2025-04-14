

export default function SkeletonJobCard() {
    return (
        <div className="p-4 flex flex-col rounded-4 bg-white">
            <div className="gap-4 pb-5 flex items-center">
                <div className="w-[40px] h-[40px] flex flex-center opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate]" />
                <div className="w-full">
                    <div className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] mb-[0.25rem] rounded-[0.125rem] last:mb-0 last:w-[80%]" />
                    <div className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] mb-[0.25rem] rounded-[0.125rem] last:mb-0 last:w-[80%]" />
                </div>
            </div>
            <div className="card-body pt-5">
                <div className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] mb-[0.25rem] rounded-[0.125rem] last:mb-0 last:w-[80%]" />
                <div className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] mb-[0.25rem] rounded-[0.125rem] last:mb-0 last:w-[80%]" />
                <div className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] mb-[0.25rem] rounded-[0.125rem] last:mb-0 last:w-[80%]" />
            </div>
        </div>

    )
}
