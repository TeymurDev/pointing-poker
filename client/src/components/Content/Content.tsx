import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import MemberGamePage from '../../pages/MemberGamePage/member-game-page';
import MemberLobbyPage from '../../pages/MemberLobbyPage/MemberLobbyPage';
import ScramMasterGamePage from '../../pages/ScramMasterGamePage/scram-master-game-page';
import ScramMasterLobbyPage from '../../pages/ScramMasterLobbyPage/ScramMasterLobbyPage';

const issuesLobby = [
  {
    name: 'issue1',
    priority: 'low priority',
  },
  {
    name: 'issue2',
    priority: 'high priority',
  },
  {
    name: 'issue3',
    priority: 'low priority',
  },
];

const issuesGame = [
  {
    current: true,
    name: 'issue1',
    priority: 'low priority',
  },
  {
    current: false,
    name: 'issue2',
    priority: 'high priority',
  },
  {
    current: false,
    name: 'issue3',
    priority: 'low priority',
  },
];

const settings = {
  scramMasterParticipation: false,
  newMemberAdmission: false,
  autoCardsFlip: false,
  changeVoteAfterReveal: false,
  timerPresence: true,
  timerMinutes: 60,
  timerSeconds: 60,
};

const voteCards = [
  {
    cardValue: 1,
  },
  {
    cardValue: 2,
  },
  {
    cardValue: 3,
  },
  {
    cardValue: 5,
  },
  {
    cardValue: 8,
  },
];

const Content: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/masterlobby/:roomId'>
          <ScramMasterLobbyPage
            issuesInfo={issuesLobby}
            settingsInfo={settings}
          />
        </Route>
        <Route path='/memberlobby/:roomId'>
          <MemberLobbyPage />
        </Route>
        <Route path='/mastergame/:roomId'>
          <ScramMasterGamePage
            issuesInfo={issuesGame}
            settingsInfo={settings}
            voteCardsInfo={voteCards}
          />
        </Route>
        <Route path='/membergame/:roomId'>
          <MemberGamePage
            issuesInfo={issuesGame}
            settingsInfo={settings}
            voteCardsInfo={voteCards}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
