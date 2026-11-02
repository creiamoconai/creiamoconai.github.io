import { Composition, Folder } from "remotion";
import { AdVerticale } from "./AdVerticale";

// 12.5s di scene - 3 transizioni da 9 frame = 348 frame a 30fps
export const RemotionRoot: React.FC = () => {
  return (
    <Folder name="Meta-Ads">
      <Composition
        id="Ad-9x16"
        component={AdVerticale}
        durationInFrames={348}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          hook: "Smetti di buttare soldi così",
          problema: "Hai già provato di tutto e niente funziona davvero?",
          nomeProdotto: "NomeProdotto",
          benefici: ["Risultati in 7 giorni", "Facile da usare", "Garanzia 30 giorni"],
          prezzo: "39,90€",
          prezzoBarrato: "79,90€",
          cta: "ORDINA ORA 👇",
          immagineProdotto: "prodotto.svg",
          coloreAccento: "#ff3b30",
          coloreSfondo: "#1a1a2e",
        }}
      />
      <Composition
        id="Ad-4x5"
        component={AdVerticale}
        durationInFrames={348}
        fps={30}
        width={1080}
        height={1350}
        defaultProps={{
          hook: "Smetti di buttare soldi così",
          problema: "Hai già provato di tutto e niente funziona davvero?",
          nomeProdotto: "NomeProdotto",
          benefici: ["Risultati in 7 giorni", "Facile da usare", "Garanzia 30 giorni"],
          prezzo: "39,90€",
          prezzoBarrato: "79,90€",
          cta: "ORDINA ORA 👇",
          immagineProdotto: "prodotto.svg",
          coloreAccento: "#ff3b30",
          coloreSfondo: "#1a1a2e",
        }}
      />
    </Folder>
  );
};
