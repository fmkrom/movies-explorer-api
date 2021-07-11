import '../BlockHeadline/BlockHeadline.css';

function BlockHeadline(props){
    return (
        <div className="block-headline">
            <p className="block-headline__text">{props.blockTitle}</p>            
        </div>
    )
};

export default BlockHeadline;