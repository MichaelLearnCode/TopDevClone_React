
export default function Nav(props) {
    const {children, onClick, customClass } = props;
    return (
      <div
        className={customClass}
        onClick = {onClick}
      >
        {children}
      </div>
    );
  }
