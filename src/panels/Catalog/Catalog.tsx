import React from 'react';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import IPanelProps from "../../types/panelProps";
import { CatalogItem, ContentFix } from "../../components";

/**
 * The catalog panel.
 *
 * @param props
 * @constructor
 */
export default function CatalogPanel(props: IPanelProps): React.ReactElement {
  return (
    <Panel id={props.id}>
      <PanelHeader fixed={false}>Главная</PanelHeader>
      <ContentFix>
        <CatalogItem href="" avatarSrc="" title="Тест" value="Валуй" />
      </ContentFix>
    </Panel>
  );
}
