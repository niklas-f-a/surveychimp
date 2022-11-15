import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';

import { Route, Routes } from 'react-router-dom';
import ThankYou from './pages/ThankYou';
import SurveyStars from './pages/SurveyStars';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        {process.env.NX_SHOW_STARS === 'true' ? (
          <Route path="/survey/:surveyId" element={<SurveyStars />} />
        ) : (
          <Route path="/survey/:surveyId" element={<SurveyPage />} />
        )}

        <Route path="/" element={<div>Du är på förstasidan</div>} />

        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
