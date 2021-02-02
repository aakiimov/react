import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { Icon28UserCircleOutline } from '@vkontakte/icons';
import { ContentFix } from '../../components';
import { DashboardCard } from '../../components/Dashboard/modules'
import IPanelProps from "../../types/panelProps";
import firebase from "../../firebase";
import { getCurrentUserId } from "../../utils";

/**
 * The profile panel.
 *
 * @param props
 * @constructor
 */
export default function ProfilePanel(props: IPanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader left={<Icon28UserCircleOutline />} fixed={false}>Профиль</PanelHeader>
      <ContentFix>
        <DashboardCard 
          title={`${firebase.database().ref(`${getCurrentUserId()}`).once('value')}`}
          subtitle="Ранг: основатель"
        />
      </ContentFix>
    </Panel>
  );
}