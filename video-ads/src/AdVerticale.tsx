import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { useVideoConfig } from "remotion";
import { AdProps } from "./types";
import { Hook } from "./scenes/Hook";
import { Problema } from "./scenes/Problema";
import { Prodotto } from "./scenes/Prodotto";
import { Cta } from "./scenes/Cta";

// Durata totale = somma scene - transizioni (2.5 + 2.5 + 4 + 3.5 - 3*0.3 ≈ 11.6s)
export const AdVerticale: React.FC<AdProps> = (p) => {
  const { fps } = useVideoConfig();
  const t = linearTiming({ durationInFrames: Math.round(0.3 * fps) });
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence name="Hook" durationInFrames={2.5 * fps}>
        <Hook testo={p.hook} accento={p.coloreAccento} sfondo={p.coloreSfondo} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={t} />
      <TransitionSeries.Sequence name="Problema" durationInFrames={2.5 * fps}>
        <Problema testo={p.problema} accento={p.coloreAccento} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={t} />
      <TransitionSeries.Sequence name="Prodotto" durationInFrames={4 * fps}>
        <Prodotto nome={p.nomeProdotto} benefici={p.benefici} immagine={p.immagineProdotto} accento={p.coloreAccento} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={t} />
      <TransitionSeries.Sequence name="CTA" durationInFrames={3.5 * fps}>
        <Cta prezzo={p.prezzo} prezzoBarrato={p.prezzoBarrato} cta={p.cta} accento={p.coloreAccento} sfondo={p.coloreSfondo} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
