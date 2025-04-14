
export default function SkeletonBlogCard() {
    return (
        <div className="mt-4">
            <div className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full" style={{ aspectRatio: "2 / 1" }} />
            <div className="card-body">
                <div className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] rounded-[0.125rem] last:mb-0 last:w-[80%] mb-3" />
                <p className="opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] mb-[0.25rem] rounded-[0.125rem] last:mb-0 last:w-[80%]" />
                <div className="mt-4 opacity-[0.7] animate-[skeleton-loading_1s_linear_infinite_alternate] w-full h-[0.5rem] mb-[0.25rem] rounded-[0.125rem] last:mb-0 last:w-[80%]" />
            </div>
        </div>

    )
}
