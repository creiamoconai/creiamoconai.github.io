# Brief: video UGC dispositivo a V + siero in omaggio

## Obiettivo
Modificare la scena di `frame-originale.webp` (donna in cucina che apre un pacco):
- la donna tira fuori il prodotto DAL pacco e lo mostra alla camera (sul tavolo all'inizio non deve esserci il vasetto);
- accanto al dispositivo bianco a V va messo il siero "ULTRA RETINOL COMPLEX – Acido 4P Jaluronico" (`offerta-dispositivo-siero.jpg`).

## Da confermare con l'utente
- Cosa estrae dal pacco: dispositivo a V (consigliato, perché l'offerta è dispositivo + siero in omaggio) oppure il vasetto SADOER (solo se fa parte del bundle).
- Se c'è il video MP4 originale (finora è arrivato solo il fotogramma 270x480).

## Pipeline
1. Modifica dell'immagine (riferimenti: frame + dispositivo-v + offerta), 9:16:
   "Same exact scene, same woman, same face, same kitchen, same lighting and camera angle. Remove the cream jar from the table completely. The cardboard box is closed on the table. Next to the white V-shaped neck massager device, place the serum bottle from the reference image (frosted glass dropper bottle, label 'ULTRA RETINOL COMPLEX - ACIDO 4P JALURONICO'), standing upright, label facing camera. Photorealistic, natural UGC smartphone look, 9:16."
2. Approvazione del fotogramma da parte dell'utente.
3. Image-to-video, 5 s, 9:16:
   "The woman opens the cardboard box, takes out the white V-shaped neck massager device, lifts it and turns it toward the camera, showing it with a warm satisfied smile. The serum bottle stays still on the table next to her. Natural hand movements, handheld smartphone UGC style, soft kitchen daylight, no text on screen."
4. Montaggio finale con il template Remotion (`src/`): hook, sottotitoli, badge "Siero in omaggio + Paghi alla consegna".

Regole: prima di ogni generazione mostrare il costo e chiedere conferma. Controllare mani, forma del dispositivo e leggibilità dell'etichetta.
