import 'reveal.js/dist/reveal.css';

// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/black.css';

import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';

Reveal.initialize({
  plugins: [RevealMarkdown],
  hash: true,
  slideNumber: true,
})
  // eslint-disable-next-line no-console
  .catch((e) => console.error(e));
