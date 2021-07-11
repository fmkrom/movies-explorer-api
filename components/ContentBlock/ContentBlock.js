import './ContentBlock.css';

function ContentBlock(props){
    return (
        <section className={
            `content-block
                ${props.isTall ? 'content-block_tall' : 'content-block_short'}
            `}>
            {props.children}
        </section>
    )
}

export default ContentBlock; 