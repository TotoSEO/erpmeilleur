"""Synchronise les ancres des pages classement avec les id générés au build.

Après `npm run build`, lit dist/<slug>/index.html, récupère les id des titres
« ### N. … » et les reporte, dans l'ordre, sur les entrées `anchor` du
frontmatter `ranking` et du composant <RankingList>. Relancer le build ensuite.
Usage : python3 scripts/sync-ranking-anchors.py
"""
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
for mdx in sorted((ROOT / 'src/content/articles').glob('*.mdx')):
    text = mdx.read_text(encoding='utf-8')
    if '\nranking:' not in text:
        continue
    html = ROOT / 'dist' / mdx.stem / 'index.html'
    ids = re.findall(r'<h3 id="(\d+)-([^"]*)"', html.read_text(encoding='utf-8'))
    ids = [f'{n}-{rest}' for n, rest in sorted(ids, key=lambda x: int(x[0]))]

    # Frontmatter : ajoute/remplace anchor sur chaque entrée de ranking.
    fm_end = text.index('\n---', 4)
    fm, body = text[:fm_end], text[fm_end:]
    block = re.search(r'\nranking:\n((?:  - \{.*\}\n?)+)', fm)
    lines = block.group(1).rstrip('\n').split('\n')
    assert len(lines) == len(ids), (mdx.name, len(lines), len(ids))
    new_lines = []
    for line, anchor in zip(lines, ids):
        line = re.sub(r', anchor: "[^"]*"', '', line)
        new_lines.append(line[:-2] + f', anchor: "{anchor}" }}')
    fm = fm.replace(block.group(1).rstrip('\n'), '\n'.join(new_lines))

    # Corps : anchors du RankingList, dans l'ordre.
    m = re.search(r'<RankingList[\s\S]*?/>', body)
    if m:
        it = iter(ids)
        seg = re.sub(r'anchor: "[^"]*"', lambda _: f'anchor: "{next(it)}"', m.group(0))
        body = body[:m.start()] + seg + body[m.end():]
    mdx.write_text(fm + body, encoding='utf-8')
    print(mdx.name, len(ids), 'ancres')
