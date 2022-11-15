import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';

import { Route, Routes } from 'react-router-dom';
import ThankYou from './pages/ThankYou';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}/>

        <Route
          path="/"
          element={<div>Du är på förstasidan</div>} />

          <Route
          path="/thankyou"
          element={<ThankYou/>}/>
      </Routes>
    </StyledApp>
  );
}

export default App;
