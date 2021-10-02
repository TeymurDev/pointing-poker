import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import ScramMaster from '../ScramMaster/ScramMaster';
import TeamMember from '../TeamMember/TeamMember';

const Content: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/scrammaster'>
          <ScramMaster />
        </Route>
        <Route path='/teammember'>
          <TeamMember />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
