import '../Techs/Techs.css';

import BlockHeadline from '../BlockHeadline/BlockHeadline';
import IconLarge from '../IconLarge/IconLarge';
import ContentBlock from '../ContentBlock/ContentBlock';

function Techs(){

    return (
        <section className="techs" id="technologies">
            <ContentBlock
                isTall={true}
            >
                <div className="techs__content">
                    <BlockHeadline blockTitle="Технологии" />
                    <h2 className="techs__title">7 Технологий</h2>
                    <div className="techs__icons-grid">
                        <IconLarge name="HTML"/>
                        <IconLarge name="CSS"/>
                        <IconLarge name="JS"/>
                        <IconLarge name="React"/>
                        <IconLarge name="Git"/>
                        <IconLarge name="Express.js"/>
                        <IconLarge name="MongoDB"/>
                    </div>
                </div>
            </ContentBlock>
        </section>
    )
};

export default Techs;