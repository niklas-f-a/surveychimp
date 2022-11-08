import SurveyModel, { ISurvey } from './SurveyModel';

export const getAllSurveys = async () => {
  const survey = await SurveyModel.find();

  if (!survey) {
    throw '404';
  }

  return survey;
};
