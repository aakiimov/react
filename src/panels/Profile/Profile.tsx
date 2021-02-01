import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
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
      <PanelHeader fixed={false}>Профиль</PanelHeader>
      <ContentFix>
        <DashboardCard 
          title={`${firebase.database().ref(`${getCurrentUserId()}`).toString()}`}
          subtitle="Ранг: основатель"
        />
      </ContentFix>
    </Panel>
  );
}