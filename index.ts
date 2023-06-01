import { registerApplication, start } from "single-spa";

registerApplication({
  name: 'courtyen-ui',
  //@ts-ignore
  app: () => import('@courtyen/ui'),
  activeWhen: ['/'],
});

start();