import React from 'react';
import { Panel, PanelHeader, SimpleCell, Avatar } from '@vkontakte/vkui';
import { Icon12Verified } from '@vkontakte/icons';
import { ContentFix } from '../../components';
import { DashboardCard } from '../../components/Dashboard/modules'
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
      <ContentFix>
        <DashboardCard>
          <SimpleCell before={<Avatar size={48} src="https://sun9-45.userapi.com/impg/VyVsYMlTp6zduYxe7YwnmumOUG44_cqRN9lFWg/nhRWEaD2wbA.jpg?size=700x690&quality=96&proxy=1&sign=beff4ad658fdba557919b051f49f18e4&type=album" />} badge={<Icon12Verified />} description="Информация о вас">Вадим Акимов</SimpleCell>
        </DashboardCard>
      </ContentFix>
    </Panel>
  );
}