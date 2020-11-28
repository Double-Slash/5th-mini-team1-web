import visit from "unist-util-visit";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";

export default function attacher({ include, exclude } = {}) {
  function visitor(node) {
    const { lang } = node;
    let { data } = node;

    if (!lang || (include && include.indexOf(lang) === -1) || (exclude && exclude.indexOf(lang) !== -1)) {
      return;
    }
    if (!data) {
      data = {};
      node.data = data;
    }
    if (!data.hProperties) {
      data.hProperties = {};
    }

    const highlighted = Prism.highlight(node.value, Prism.languages[lang] || Prism.languages.markup);
    node.type = "html";
    node.value = `<pre><code class="language-${lang}">${highlighted}</code></pre>`;
  }

  return (ast) => visit(ast, "code", visitor);
}
