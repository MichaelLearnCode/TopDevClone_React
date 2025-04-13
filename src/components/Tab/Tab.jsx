

export default function Tab(props) {
    const {
        className = '',
        headerClass = '',
        bodyClass = '',
        onChange,
        items = [],
        currentItem
    } = props;

    const initialTabClass = "";
    const initialHeaderClass = "flex items-center";

    const handleItemClick = (tab)=>{
        onChange(tab);
    }

    const renderedHeader = items.map(item=>{
        return <div key = {item.key} onClick = {()=>{handleItemClick(item)}}>{item.label}</div>
    })


    return (
        <div className = {`${initialTabClass} ${className}`}>
            <div className={`${initialHeaderClass} ${headerClass}`}>
                {renderedHeader}
            </div>
            <div className={`${bodyClass}`}>
                {currentItem.content}
            </div>
        </div>
    )
}
