import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { useVideoConfig } from "remotion";
import { SceneCrema, SceneDispositivo, SceneFinale, SceneHook, SceneSiero } from "./Scene";

export type BlackFridayProps = {
  scadenza: string;
  nomeDispositivo: string;
  puntiDispositivo: string[];
  titoloSiero: string;
  titoloCrema: string;
  prezzo: string; // lascia vuoto per non mostrarlo
  cta: string;
};

// Scene: 2.5 + 3.5 + 3 + 3.3 + 4.3 s = 16.6 s - 4 transizioni da 8 frame -> 466 frame a 30fps
export const BlackFriday: React.FC<BlackFridayProps> = (p) => {
  const { fps } = useVideoConfig();
  const t = linearTiming({ durationInFrames: 8 });
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence name="Hook" durationInFrames={Math.round(2.5 * fps)}>
        <SceneHook scadenza={p.scadenza} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={t} />
      <TransitionSeries.Sequence name="Dispositivo" durationInFrames={Math.round(3.5 * fps)}>
        <SceneDispositivo nome={p.nomeDispositivo} punti={p.puntiDispositivo} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={t} />
      <TransitionSeries.Sequence name="Siero" durationInFrames={Math.round(3 * fps)}>
        <SceneSiero titolo={p.titoloSiero} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={t} />
      <TransitionSeries.Sequence name="Crema" durationInFrames={Math.round(3.3 * fps)}>
        <SceneCrema titolo={p.titoloCrema} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition presentation={fade()} timing={t} />
      <TransitionSeries.Sequence name="Finale" durationInFrames={Math.round(4.3 * fps)}>
        <SceneFinale cta={p.cta} scadenza={p.scadenza} prezzo={p.prezzo} />
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
