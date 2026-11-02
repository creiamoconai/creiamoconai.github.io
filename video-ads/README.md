# video-ads — Template Remotion per Meta Ads (COD)

Ad video da circa 11,6 secondi, divisa in 4 scene: **Hook → Problema → Prodotto + benefici → Prezzo + "Paghi alla consegna" + CTA**.
Ci sono due formati: `Ad-9x16` (Reels/Stories) e `Ad-4x5` (Feed).

## Avvio
```bash
npm i
npm run dev        # apre Remotion Studio su http://localhost:3000
```

## Personalizzare
- Testi, prezzi e colori: modifica i `defaultProps` in `src/Root.tsx` oppure il pannello Props dello Studio.
- Immagine prodotto: mettila in `public/` (consigliato un PNG con sfondo trasparente) e imposta `immagineProdotto: "nomefile.png"`.
- Durate delle scene: `src/AdVerticale.tsx`. Se le cambi, aggiorna `durationInFrames` in `Root.tsx`.

## Export
```bash
npx remotion render Ad-9x16 out/ad-9x16.mp4
npx remotion render Ad-4x5 out/ad-4x5.mp4
# variante di test senza toccare il codice:
npx remotion render Ad-9x16 out/hook-b.mp4 --props='{"hook":"Nessuno te lo dice ma..."}'
```
Nota: `--props` sovrascrive solo i campi che passi.

Licenza: Remotion è gratuito per team fino a 3 persone (verifica le condizioni su remotion.pro/license).
