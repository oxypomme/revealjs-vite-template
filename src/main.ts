import 'reveal.js/dist/reveal.css';

// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
import 'reveal.js/dist/theme/black.css';

import Reveal from 'reveal.js';
import RebealMarkdown from 'reveal.js/plugin/markdown/markdown';

const deck = new Reveal({
  plugins: [RebealMarkdown],
});
await deck.initialize({ hash: true, slideNumber: true });
