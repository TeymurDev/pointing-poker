import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import MemberGamePage from '../../pages/MemberGamePage/member-game-page';
import MemberLobbyPage from '../../pages/MemberLobbyPage/MemberLobbyPage';
import ScramMasterGamePage from '../../pages/ScramMasterGamePage/scram-master-game-page';
import ScramMasterLobbyPage from '../../pages/ScramMasterLobbyPage/ScramMasterLobbyPage';

const Content: FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route path='/masterlobby/:roomId'>
          <ScramMasterLobbyPage
            issuesInfo={[
              {
                name: 'issue542',
                priority: 'low priority',
              },
              {
                name: 'issue555',
                priority: 'high priority',
              },
            ]}
            settingsInfo={{
              scramMasterParticipation: false,
              newMemberAdmission: false,
              autoCardsFlip: false,
              changeVoteAfterReveal: false,
              timerPresence: true,
              timerMinutes: 60,
              timerSeconds: 60,
            }}
          />
        </Route>
        <Route path='/memberlobby/:roomId'>
          <MemberLobbyPage />
        </Route>
        <Route path='/mastergame/:roomId'>
          <ScramMasterGamePage
            issuesInfo={[
              {
                current: true,
                name: 'issue13',
                priority: 'low priority',
              },
              {
                current: false,
                name: 'issue542',
                priority: 'low priority',
              },
              {
                current: false,
                name: 'issue6421',
                priority: 'low priority',
              },
              {
                current: false,
                name: 'issue111',
                priority: 'low priority',
              },
            ]}
            settingsInfo={{
              scramMasterParticipation: false,
              newMemberAdmission: false,
              autoCardsFlip: false,
              changeVoteAfterReveal: false,
              timerPresence: true,
              timerMinutes: 60,
              timerSeconds: 60,
            }}
            voteCardsInfo={[
              {
                cardValue: 15,
              },
              {
                cardValue: 77,
              },
              {
                cardValue: 87,
              },
              {
                cardValue: 33,
              },
            ]}
          />
        </Route>
        <Route path='/membergame/:roomId'>
          <MemberGamePage
            issuesInfo={[
              {
                current: true,
                name: 'issue13',
                priority: 'low priority',
              },
              {
                current: false,
                name: 'issue542',
                priority: 'low priority',
              },
              {
                current: false,
                name: 'issue6421',
                priority: 'low priority',
              },
              {
                current: false,
                name: 'issue111',
                priority: 'low priority',
              },
            ]}
            settingsInfo={{
              scramMasterParticipation: false,
              newMemberAdmission: false,
              autoCardsFlip: false,
              changeVoteAfterReveal: false,
              timerPresence: true,
              timerMinutes: 60,
              timerSeconds: 60,
            }}
            voteCardsInfo={[
              {
                cardValue: 15,
              },
              {
                cardValue: 77,
              },
              {
                cardValue: 87,
              },
              {
                cardValue: 33,
              },
            ]}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
