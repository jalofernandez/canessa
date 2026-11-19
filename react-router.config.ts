import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src/app',
  ssr: false,
  prerender: ['/', '/contacto', '/blog/el-gran-reencuentro'],
  routeDiscovery: { mode: 'initial' },
} satisfies Config;
