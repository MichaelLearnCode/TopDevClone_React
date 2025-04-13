
export default function BlogCard(props) {
    const {
        className = '',
        content = 'Card Content',
        title = 'Card Title',
        imgUrl = 'https://picsum.photos/seed/2qq0Lch9u/2302/385?blur=4',
        date = '2023-01-01T00:00:00Z',
        field = 'Field'
    } = props;
    const formatDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className={`mt-4 relative rounded-[16px] overflow-hidden shadow-[0_12px_60px_0_rgba(156,161,186,0.16)] ${className}`}>
            <div className="card-img-wrapper relative">
                <img
                    src={imgUrl}
                    alt=""
                    className="aspect-[3/2] w-full object-cover"
                />
                <div className="bg-black/0 hover:bg-black/20 transition-all absolute w-full h-full top-0 left-0" />
                <div className="rounded-[20px] text-white small-headline absolute top-[5%] right-[5%] bg-white/25 py-2 px-4">{field}</div>
            </div>
            <div className="p-4">
                <h3 className="card-title display-2">
                    {title}
                </h3>
                <p className="card-text text-limit-2 mt-3 body-1">
                    {content}
                </p>
                <div className="mt-4 flex justify-between items-center">
                    <span className="small-headline text-neutral-gray-6">{formatDate}</span>
                    <a
                        href="#"
                        className="flex items-center text-primary text-decoration-none"
                    >
                        <span className="small-headline me-2">Read More</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
