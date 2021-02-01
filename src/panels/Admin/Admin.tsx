import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import { ContentFix, AddButton, DebtController } from '../../components';
import IPanelProps from "../../types/panelProps";

/**
 * The admin panel.
 *
 * @param props
 * @constructor
 */
export default function AdminPanel(props: IPanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader fixed={false}>Админка</PanelHeader>
    </Panel>
  );
}