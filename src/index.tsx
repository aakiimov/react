import "core-js/features/map";
import "core-js/features/set";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/index.css';
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit");

bridge.subscribe(({ detail: { type, data }}) => {
  if (type === 'VKWebAppUpdateConfig') {
    const schemeAttribute = document.createAttribute('scheme');
    //@ts-ignore
    schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
    document.body.attributes.setNamedItem(schemeAttribute);
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
import("./eruda").then(({ default: eruda }) => {}); //runtime download
