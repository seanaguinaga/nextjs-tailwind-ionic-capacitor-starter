import {
  IonApp,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';
import { Redirect, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './pages/Feed';
import ListDetail from './pages/ListDetail';
import Lists from './pages/Lists';
import Settings from './pages/Settings';

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonPage id="main">
            <IonTabs>
              <IonRouterOutlet id="main">
                <Route path="/tabs/feed" component={Home} exact={true} />
                <Route path="/tabs/lists" component={Lists} exact={true} />
                <Route path="/tabs/lists/:listId" component={ListDetail} exact={true} />
                <Route path="/tabs/settings" component={Settings} exact={true} />
                <Route path="/tabs" render={() => <Redirect to="/tabs/feed" />} exact={true} />
                <Route exact path="/" render={() => <Redirect to="/tabs" />} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tabs/feed">
                  <IonIcon icon={flash} />
                  <IonLabel>Feed</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tabs/lists">
                  <IonIcon icon={list} />
                  <IonLabel>Lists</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tabs/settings">
                  <IonIcon icon={cog} />
                  <IonLabel>Settings</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
