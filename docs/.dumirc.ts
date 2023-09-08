import { defineConfig } from 'dumi';
import { Github } from 'lucide-react';

import { homepage } from '../package.json';

const isWin = process.platform === 'win32';

const isProd = process.env.NODE_ENV === 'production';

const themeConfig = {
  actions: [
    {
      icon: Github,
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: 'https://github.com/lobehub/lobe-chat',
      text: 'Try it on LobeChat',
      type: 'primary',
    },
  ],
  footer: 'Made with 🤯 by LobeHub',
  name: 'Realtime Weather',
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
};

export default defineConfig({
  base: isProd ? '/docs/' : '/',
  extraBabelPlugins: ['babel-plugin-antd-style'],
  favicons: [
    'https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/rainbow.webp',
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  outputPath: '../public/docs',
  publicPath: isProd ? '/docs/' : '/',
  // ssr: isProduction ? {} : false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'RealTime Weather - Lobe Chat Plugin',
});
