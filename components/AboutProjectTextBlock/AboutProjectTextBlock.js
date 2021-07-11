import './AboutProjectTextBlock.css';

function AboutProjectTextBlock(props){
return (
    <div className="about-project__text-block">
        <h3 className="about-project__text-block-title">{props.title}</h3>
        <p className="about-project__text-block-text">{props.text}</p>
    </div>
    )
};

export default AboutProjectTextBlock;