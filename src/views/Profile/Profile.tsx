import React from 'react';
import { View } from '@vkontakte/vkui';
import { ProfilePanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";

/**
 * The profile view.
 *
 * @constructor
 */
export default function ProfileView(props: ViewProps & PanelProps): React.ReactElement {
  return (
    <View id={props.id} activePanel={props.activePanel}>
      <ProfilePanel id={props.id} />
    </View>
  );
}