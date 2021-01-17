export const LinkElement = ({ url, children, handler }) => {
    return (
        <li>
            <a onMouseOver={handler} href={url}>
                {children}
            </a>
        </li>
    );
};
