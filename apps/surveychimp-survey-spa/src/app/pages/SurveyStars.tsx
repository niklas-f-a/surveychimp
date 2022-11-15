import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getSurveyById from '../../api/getSurveyById';
import { ISurvey } from '@surveychimp/surveychimp-lib';
import ReactStars from 'react-stars';

const SurveyStars = () => {
  const { surveyId } = useParams();
  const [survey, setSurvey] = useState<ISurvey>();

  useEffect(() => {
    if (surveyId) {
      getSurveyById(surveyId).then((survey) => {
        setSurvey(survey);
      });
    } else {
      //Visa upp att id saknas
    }
  }, []);
  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };

  return (
    <>
      <h1>Survey</h1>
      <p>{survey?.recipient?.name}</p>
      <ReactStars
        count={4}
        onChange={ratingChanged}
        size={24}
        color2={'#ffd700'}
      />
    </>
  );
};

export default SurveyStars;
