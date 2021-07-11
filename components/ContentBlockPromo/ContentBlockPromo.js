import './ContentBlockPromo.css';

function ContentBlockPromo(props){
    return (
        <section className='content-block-promo'>
            {props.children}
        </section>
    )
}

export default ContentBlockPromo; 