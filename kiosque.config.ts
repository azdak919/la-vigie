import type { KiosqueConfig } from './packages/pipeline/src/config.ts';

const config: Partial<KiosqueConfig> = {
  // Les articles s’écrivent dans le socle (serveur du journal) ; le site est publié par GitHub.
  source: { adapter: 'socle', options: { baseUrl: "http://127.0.0.1:18820/journal/socle" } },
  editorial: { mode: 'external' },
  deploy: {
    basePath: "/la-vigie",
  },
  demoContent: false,
  feedLimit: 30,
};

export default config;
