import '../AboutProject/AboutProject.css';

import ContentBlock from '../ContentBlock/ContentBlock';
import BlockHeadline from '../BlockHeadline/BlockHeadline';
import AboutProjectTextBlock from '../AboutProjectTextBlock/AboutProjectTextBlock';
import BarChartFraction from '../BarChartFraction/BarChartFraction';
import info from '../../utils/info';

function AboutProject(){

    return (
        <ContentBlock
            isTall={true}
        >
            <section className="about-project" id="about-project">
                <BlockHeadline blockTitle="О проекте" />
                <div className="about-project__content">
                    <AboutProjectTextBlock 
                        title={info.diplomaStagesTitle}
                        text={info.diplomaStagesText}
                    />
                    <AboutProjectTextBlock 
                        title={info.diplomaTimelineTitle}
                        text={info.diplomaTimelineText}
                    />
                </div>
                <div className="about-project__bar-chart">
                    <BarChartFraction 
                        isTextWhite={true}
                        isSmall={true}
                        title="1 неделя"
                        subtitle="Back-end"
                    />
                    <BarChartFraction 
                        isTextWhite={false}
                        isSmall={false}
                        title="5 недель"
                        subtitle="Front-end"
                    />
                </div>
            </section>
        </ContentBlock>
    )
};

export default AboutProject;