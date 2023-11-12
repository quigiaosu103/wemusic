import HeaderOnly from '~/layoout/HeaderOnly';

function Empty({ children, title }) {
    return <HeaderOnly title={title}>{children}</HeaderOnly>;
}

export default Empty;
