import { ISurvey } from '@surveychimp/surveychimp-lib';

const getSurveyById = async (surveyId: string): Promise<ISurvey> => {
    return (await fetch(`api/survey/${surveyId}`)).json();
}

export default getSurveyById;