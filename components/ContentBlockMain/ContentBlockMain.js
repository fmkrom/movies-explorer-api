import './ContentBlockMain.css';

function ContentBlockMain(props){
    return (
        <section className="content-block_main">
            {props.children}
        </section>
    )
}

export default ContentBlockMain; 