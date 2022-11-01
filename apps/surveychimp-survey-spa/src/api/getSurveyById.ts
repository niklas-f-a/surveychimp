import { ISurvey } from '@surveychimp/surveychimp-lib';

const getSurveyById = async (surveyId: string): Promise<ISurvey> => {
    return (await fetch(`http://localhost:4200/api/survey/${surveyId}`)).json();
}

export default getSurveyById;