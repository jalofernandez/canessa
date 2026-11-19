import type { Config } from '@react-router/dev/config';
import inventory from './scripts/routes.json';

export default {
  appDirectory: 'src/app',
  ssr: false,
  prerender: inventory.routes,
  routeDiscovery: { mode: 'initial' },
} satisfies Config;
