
export default function JobCard(props) {
    const {
        thumbnail = 'https://avatars.githubusercontent.com/u/91683993',
        title = 'Card Title',
        description = 'Card Description',
        salary = 500,
        type = 'Type',
        locationType = 'Location Type',
        className =''
    } = props;
    return (
        <div className={`p-[16px] flex flex-col rounded-[15px] shadow-[0_12px_60px_0_rgba(156,161,186,0.16)] ${className}`}>
            <div className="border-b-[1px] border-b-neutral-gray-6 border-dashed gap-4 pb-5 flex items-center">
                <div className="w-[48px] h-[48px] flex items-center justify-center">
                    <img
                        className="w-[32px] h-[32px]"
                        src={thumbnail}
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="mt-0 mb-1 card-title display-2 text-limit-1">
                        {title}
                    </h3>
                    <span className="extra-small text-primary">Up to {salary}$</span>
                </div>
                <img
                    className="w-[24px] h-[24px] ms-auto"
                    src="/assets/image/spotlight-section/icon/img_icon_archive-tick.png"
                    alt=""
                />
            </div>
            <div className="card-body pt-5">
                <div className="flex mb-2">
                    <div className="flex me-4">
                        <img
                            className="w-[15px] h-[15px] me-[5px]"
                            src="/assets/image/spotlight-section/icon/img_icon_building.png"
                            alt="building icon"
                        />
                        <span className="small-headline">{locationType}</span>
                    </div>
                    <div className="flex">
                        <div className="me-1 flex items-center justify-center">
                            <img
                                className="w-[15px] h-[15px] me-[5px]"
                                src="/assets/image/spotlight-section/icon/img_icon_clock.png"
                                alt="clock icon"
                            />
                        </div>
                        <span className="small-headline">{type}</span>
                    </div>
                </div>
                <div className="text-limit-2 description-small">
                    {description}
                </div>
            </div>
        </div>
    )
}
