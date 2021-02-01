import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { ContentFix, AddButton, DebtController } from '../../components';
import IPanelProps from "../../types/panelProps";

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
    </Panel>
  );
}