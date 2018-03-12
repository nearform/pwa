const h = require('choo/html')
const raw = require('choo/html/raw')

const css = require('sheetify')

const prefix = css`
  :host {
    word-break: break-all;
  }
`

const placeholder = {
  hed: h`
    <span class="${prefix} moon-gray">
      ${raw('&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;')}
    </span>
  `,
  contributor: h`
    <span class="${prefix} moon-gray">
      ${raw('&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;')}
    </span>
  `,
  tout: {
    src: 'https://www.pixedelic.com/themes/geode/demo/wp-content/uploads/sites/4/2014/04/placeholder.png'
  },
  body: h`
    <div class="${prefix} moon-gray">
      ${raw('&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;')}
      <br />
      ${raw('&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;')}
      <br />
      ${raw('&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;')}
      <br />
      ${raw('&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;&lhblk;')}
    </div>
  `
}

const article = (article = placeholder) => h`
  <article class="mw7 center avenir">
    <div class="pb4 bb mb4 tc">
      <h1 class="f3 f2-m f1-l lh-title baskerville">${article.hed}</h1>
      <cite class="f6 ttu fs-normal">By: ${article.contributor}</cite>
    </div>
    <div class="aspect-ratio aspect-ratio--16x9 mb4">
      <div class="aspect-ratio--object cover" style="background:url(${article.tout.src}) center;"></div>
    </div>
    <p class="lh-copy">
      ${article.body}
    </p>
  </article>
`

module.exports = article
