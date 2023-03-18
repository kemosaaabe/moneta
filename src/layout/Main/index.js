import Hero from '../../components/Hero';
import LongMockup from '../../components/LongMockup';
import ShortFeatures from '../../components/ShortFeatures';
import MainFeatures from '../../components/MainFeatures';
import ReviewsManage from '../../components/ReviewsManage';
import FreqAskQuestions from '../../components/FreqAskQuestions';

const Main = () => {
    return (
        <>
            <Hero />
            <ShortFeatures />
            <LongMockup />
            <MainFeatures />
            <ReviewsManage />
            <FreqAskQuestions />
        </>
    );
};

export default Main;
