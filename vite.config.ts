import { defineConfig, type PluginOption } from 'vite';

const PagesHMR = (): PluginOption => ({
  name: 'pages-hmr',
  enforce: 'post',
  // HMR
  handleHotUpdate({ file, server }) {
    if (/src\/pages\/.*\.(md|ts)/i.test(file)) {
      server.ws.send({
        type: 'full-reload',
        path: '*',
      });
    }
  },
});

export default defineConfig({
  plugins: [
    PagesHMR(),
  ],
});
