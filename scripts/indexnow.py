#!/usr/bin/env python3
"""Signale les URLs du site aux moteurs IndexNow (Bing, Yandex, Seznam, Naver…).

Usage, après un déploiement qui ajoute ou modifie des pages :
    python3 scripts/indexnow.py                 # toutes les URLs du sitemap en ligne
    python3 scripts/indexnow.py /prix-erp/ ...  # seulement ces chemins

La clé est publiée à la racine du site (public/<clé>.txt), comme l'exige le protocole.
"""
import json
import re
import sys
import urllib.request

SITE = "https://meilleur-erp.fr"
KEY = "7adaef5ad91ba4902f7893c9ae098fc2"
ENDPOINT = "https://api.indexnow.org/indexnow"


def sitemap_urls():
    with urllib.request.urlopen(f"{SITE}/sitemap.xml", timeout=30) as r:
        xml = r.read().decode("utf-8")
    return re.findall(r"<loc>([^<]+)</loc>", xml)


def main():
    urls = [SITE + p if p.startswith("/") else p for p in sys.argv[1:]] or sitemap_urls()
    body = json.dumps({
        "host": "meilleur-erp.fr",
        "key": KEY,
        "keyLocation": f"{SITE}/{KEY}.txt",
        "urlList": urls[:10000],
    }).encode("utf-8")
    req = urllib.request.Request(ENDPOINT, data=body, method="POST",
                                 headers={"Content-Type": "application/json; charset=utf-8"})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            print(f"IndexNow : {r.status} pour {len(urls)} URL(s)")
    except urllib.error.HTTPError as e:
        print(f"IndexNow : erreur {e.code} ({e.reason})")
        sys.exit(1)


if __name__ == "__main__":
    main()
