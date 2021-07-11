function FormSubtitleBlock(props){
    <div className="form__subtitle-block">
        <span className="form__subtitle-text">{props.formSubtitleText}</span>
        <Link to={props.formSubtitleLinkRoute} className="form__subtitle-link">{props.formSubtitleLinkText}</Link>
    </div>
}