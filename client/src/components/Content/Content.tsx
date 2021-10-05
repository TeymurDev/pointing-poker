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
        <Route path='/scrammasterlobby'>
          <ScramMasterLobbyPage
            sessionName='master'
            scramMasterInfo={{
              id: '1',
              firstName: 'John',
              lastName: 'Peters',
              position: 'Master',
              image: 'link',
            }}
            lobbyLink='link'
            membersInfo={[
              {
                id: '2',
                firstName: 'David',
                lastName: 'Blane',
                position: 'Player',
                image: 'link',
              },
              {
                id: '3',
                firstName: 'Dayana',
                lastName: 'Ross',
                position: 'Player',
                image: 'link',
              },
              {
                id: '4',
                firstName: 'Daniel',
                lastName: 'Horn',
                position: 'Player',
                image: 'link',
              },
              {
                id: '5',
                firstName: 'Mark',
                lastName: 'Single',
                position: 'Player',
                image: 'link',
              },
              {
                id: '6',
                firstName: 'Jane',
                lastName: 'Ring',
                position: 'Player',
                image: 'link',
              },
              {
                id: '7',
                firstName: 'Larry',
                lastName: 'King',
                position: 'Player',
                image: 'link',
              },
              {
                id: '8',
                firstName: 'Fill',
                lastName: 'Fill',
                position: 'Player',
                image: 'link',
              },
            ]}
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
        <Route path='/teammemberlobby'>
          <MemberLobbyPage
            sessionName='member'
            scramMasterInfo={{
              id: '1',
              firstName: 'John',
              lastName: 'Peters',
              position: 'Master',
              image: 'link',
            }}
            membersInfo={[
              {
                id: '2',
                firstName: 'David',
                lastName: 'Blane',
                position: 'Player',
                image: 'link',
              },
              {
                id: '3',
                firstName: 'Dayana',
                lastName: 'Ross',
                position: 'Player',
                image: 'link',
              },
              {
                id: '4',
                firstName: 'Daniel',
                lastName: 'Horn',
                position: 'Player',
                image: 'link',
              },
              {
                id: '5',
                firstName: 'Mark',
                lastName: 'Single',
                position: 'Player',
                image: 'link',
              },
              {
                id: '6',
                firstName: 'Jane',
                lastName: 'Ring',
                position: 'Player',
                image: 'link',
              },
              {
                id: '7',
                firstName: 'Larry',
                lastName: 'King',
                position: 'Player',
                image: 'link',
              },
              {
                id: '8',
                firstName: 'Fill',
                lastName: 'Fill',
                position: 'Player',
                image: 'link',
              },
            ]}
          />
        </Route>
        <Route path='/scrammastergame'>
          <ScramMasterGamePage
            sessionName='mastergame'
            scramMasterInfo={{
              id: '1',
              firstName: 'John',
              lastName: 'Peters',
              position: 'Master',
              image: 'link',
            }}
            membersInfo={[
              {
                id: '2',
                firstName: 'David',
                lastName: 'Blane',
                position: 'Player',
                image: 'link',
              },
              {
                id: '3',
                firstName: 'Dayana',
                lastName: 'Ross',
                position: 'Player',
                image: 'link',
              },
              {
                id: '4',
                firstName: 'Daniel',
                lastName: 'Horn',
                position: 'Player',
                image: 'link',
              },
              {
                id: '5',
                firstName: 'Mark',
                lastName: 'Single',
                position: 'Player',
                image: 'link',
              },
              {
                id: '6',
                firstName: 'Jane',
                lastName: 'Ring',
                position: 'Player',
                image: 'link',
              },
              {
                id: '7',
                firstName: 'Larry',
                lastName: 'King',
                position: 'Player',
                image: 'link',
              },
              {
                id: '8',
                firstName: 'Fill',
                lastName: 'Fill',
                position: 'Player',
                image: 'link',
              },
            ]}
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
        <Route path='/teammembergame'>
          <MemberGamePage
            sessionName='membergame'
            scramMasterInfo={{
              id: '1',
              firstName: 'John',
              lastName: 'Peters',
              position: 'Master',
              image: 'link',
            }}
            membersInfo={[
              {
                id: '2',
                firstName: 'David',
                lastName: 'Blane',
                position: 'Player',
                image: 'link',
              },
              {
                id: '3',
                firstName: 'Dayana',
                lastName: 'Ross',
                position: 'Player',
                image: 'link',
              },
              {
                id: '4',
                firstName: 'Daniel',
                lastName: 'Horn',
                position: 'Player',
                image: 'link',
              },
              {
                id: '5',
                firstName: 'Mark',
                lastName: 'Single',
                position: 'Player',
                image: 'link',
              },
              {
                id: '6',
                firstName: 'Jane',
                lastName: 'Ring',
                position: 'Player',
                image: 'link',
              },
              {
                id: '7',
                firstName: 'Larry',
                lastName: 'King',
                position: 'Player',
                image: 'link',
              },
              {
                id: '8',
                firstName: 'Fill',
                lastName: 'Fill',
                position: 'Player',
                image: 'link',
              },
            ]}
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
