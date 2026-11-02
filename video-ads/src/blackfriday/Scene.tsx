import { AbsoluteFill, Easing, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { sans, serif, SFONDO, testoOro } from "./stile";

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;

const Sfondo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill style={{ background: SFONDO, alignItems: "center" }}>{children}</AbsoluteFill>
);

// Bagliore dorato dietro ai prodotti
const Alone: React.FC<{ size: number; top: number; colore?: string }> = ({ size, top, colore = "rgba(255,200,90,0.35)" }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        position: "absolute",
        top,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${colore} 0%, rgba(0,0,0,0) 65%)`,
        scale: 1 + Math.sin(frame / 12) * 0.05,
      }}
    />
  );
};

/* 1. HOOK: Black Friday */
export const SceneHook: React.FC<{ scadenza: string }> = ({ scadenza }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slam = spring({ frame, fps, config: { damping: 12, mass: 0.8 } });
  return (
    <Sfondo>
      <Alone size={1400} top={260} />
      <div style={{ position: "absolute", top: 560, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ fontFamily: serif, fontWeight: 900, fontSize: 190, lineHeight: 0.95, textAlign: "center", ...testoOro, scale: interpolate(slam, [0, 1], [2.4, 1]), opacity: slam }}>
          BLACK
          <br />
          FRIDAY
        </div>
        <div style={{ width: interpolate(frame, [10, 30], [0, 760], { ...clamp, easing: Easing.out(Easing.cubic) }), height: 4, background: "#d9a93a", margin: "40px 0" }} />
        <div style={{ fontFamily: sans, fontWeight: 800, fontSize: 64, color: "white", letterSpacing: 6, opacity: interpolate(frame, [20, 32], [0, 1], clamp) }}>
          SOLO FINO AL {scadenza}
        </div>
      </div>
    </Sfondo>
  );
};

/* 2. PRODOTTO PRINCIPALE: dispositivo LED */
export const SceneDispositivo: React.FC<{ nome: string; punti: string[] }> = ({ nome, punti }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sali = spring({ frame, fps, config: { damping: 15 } });
  const ledOn = interpolate(frame, [0.5 * fps, 0.8 * fps], [0, 1], clamp);
  return (
    <Sfondo>
      <Alone size={1200} top={250} colore={`rgba(80,255,140,${0.22 * ledOn})`} />
      <div style={{ position: "absolute", top: 140, fontFamily: serif, fontWeight: 900, fontSize: 92, textAlign: "center", lineHeight: 1.05, padding: "0 80px", ...testoOro, opacity: sali }}>
        {nome}
      </div>
      <Img
        src={staticFile("bf/dispositivo.png")}
        style={{
          position: "absolute",
          top: 430,
          height: 1000,
          translate: `0 ${interpolate(sali, [0, 1], [500, 0])}px`,
          rotate: `${interpolate(frame, [0, 3.5 * fps], [-6, 3])}deg`,
          filter: `drop-shadow(0 0 ${40 * ledOn}px rgba(90,255,150,0.6)) drop-shadow(0 30px 40px rgba(0,0,0,0.6))`,
        }}
      />
      <div style={{ position: "absolute", bottom: 150, display: "flex", gap: 24 }}>
        {punti.map((p, i) => {
          const s = 1.0 * fps + i * 0.35 * fps;
          return (
            <div
              key={i}
              style={{
                fontFamily: sans,
                fontWeight: 800,
                fontSize: 44,
                color: "#1a1206",
                background: "linear-gradient(180deg,#ffe9a8,#e0b24a)",
                padding: "18px 34px",
                borderRadius: 60,
                opacity: interpolate(frame, [s, s + 6], [0, 1], clamp),
                scale: interpolate(frame, [s, s + 8], [0.6, 1], { ...clamp, easing: Easing.out(Easing.back(2)) }),
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
    </Sfondo>
  );
};

/* Etichetta "OMAGGIO" riutilizzabile */
const Badge: React.FC<{ testo: string; ritardo: number }> = ({ testo, ritardo }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        fontFamily: sans,
        fontWeight: 900,
        fontSize: 54,
        color: "#1a1206",
        background: "linear-gradient(180deg,#fff0b8,#d9a93a)",
        padding: "16px 44px",
        borderRadius: 16,
        letterSpacing: 3,
        rotate: "-3deg",
        boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
        scale: interpolate(frame, [ritardo, ritardo + 8], [0, 1], { ...clamp, easing: Easing.out(Easing.back(2.5)) }),
      }}
    >
      {testo}
    </div>
  );
};

/* 3. OMAGGIO 1: siero */
export const SceneSiero: React.FC<{ titolo: string }> = ({ titolo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const entra = spring({ frame, fps, config: { damping: 14 } });
  return (
    <Sfondo>
      <Alone size={1100} top={420} />
      <div style={{ position: "absolute", top: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
        <Badge testo="🎁 OMAGGIO N°1" ritardo={0} />
        <div style={{ fontFamily: serif, fontWeight: 900, fontSize: 84, textAlign: "center", lineHeight: 1.05, padding: "0 80px", ...testoOro, opacity: interpolate(frame, [6, 16], [0, 1], clamp) }}>
          {titolo}
        </div>
      </div>
      <Img src={staticFile("bf/dispositivo.png")} style={{ position: "absolute", top: 620, left: interpolate(entra, [0, 1], [290, 120]), height: 900, filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.6))" }} />
      <Img
        src={staticFile("bf/siero.png")}
        style={{
          position: "absolute",
          top: 860,
          left: 600,
          height: 680,
          translate: `${interpolate(entra, [0, 1], [700, 0])}px 0`,
          rotate: `${interpolate(entra, [0, 1], [25, 0])}deg`,
          filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.6))",
        }}
      />
    </Sfondo>
  );
};

/* 4. OMAGGIO 2 (solo Black Friday): crema dorata */
export const SceneCrema: React.FC<{ titolo: string }> = ({ titolo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const cade = spring({ frame: frame - 6, fps, config: { damping: 9, mass: 0.9 } });
  return (
    <Sfondo>
      <Alone size={1300} top={500} colore="rgba(255,190,60,0.45)" />
      {/* scintille */}
      {new Array(14).fill(0).map((_, i) => {
        const x = (i * 137) % 1000 + 40;
        const y = 600 + ((i * 251) % 900);
        const t = (frame + i * 7) % 40;
        return <div key={i} style={{ position: "absolute", left: x, top: y - t * 4, width: 12, height: 12, borderRadius: 6, background: "#ffe39a", opacity: interpolate(t, [0, 20, 40], [0, 1, 0]) * cade }} />;
      })}
      <div style={{ position: "absolute", top: 150, display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}>
        <Badge testo="🎁 OMAGGIO N°2" ritardo={0} />
        <div style={{ fontFamily: sans, fontWeight: 800, fontSize: 44, color: "white", letterSpacing: 4, opacity: interpolate(frame, [4, 12], [0, 1], clamp) }}>SOLO PER IL BLACK FRIDAY</div>
        <div style={{ fontFamily: serif, fontWeight: 900, fontSize: 88, textAlign: "center", lineHeight: 1.05, padding: "0 80px", ...testoOro, opacity: interpolate(frame, [8, 18], [0, 1], clamp) }}>
          {titolo}
        </div>
      </div>
      <Img
        src={staticFile("bf/crema.png")}
        style={{
          position: "absolute",
          top: 820,
          width: 900,
          translate: `0 ${interpolate(cade, [0, 1], [-1300, 0])}px`,
          filter: "drop-shadow(0 40px 50px rgba(0,0,0,0.7))",
        }}
      />
    </Sfondo>
  );
};

/* 5. CHIUSURA: bundle completo + COD + CTA */
export const SceneFinale: React.FC<{ cta: string; scadenza: string; prezzo: string }> = ({ cta, scadenza, prezzo }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const a = spring({ frame, fps, config: { damping: 14 } });
  const pulsa = 1 + Math.sin((frame / fps) * Math.PI * 2.2) * 0.045;
  return (
    <Sfondo>
      <Alone size={1300} top={380} />
      <div style={{ position: "absolute", top: 110, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div style={{ fontFamily: serif, fontWeight: 900, fontSize: 104, ...testoOro, scale: a }}>DOPPIO OMAGGIO</div>
        <div style={{ fontFamily: sans, fontWeight: 800, fontSize: 46, color: "white", opacity: a }}>Dispositivo LED + Siero + Crema dorata</div>
      </div>
      <Img src={staticFile("bf/dispositivo.png")} style={{ position: "absolute", top: 380, left: 170, height: 860, scale: a, filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.6))" }} />
      <Img src={staticFile("bf/siero.png")} style={{ position: "absolute", top: 620, left: 640, height: 560, scale: a, filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.6))" }} />
      <Img src={staticFile("bf/crema.png")} style={{ position: "absolute", top: 1000, left: 330, width: 560, scale: interpolate(frame, [6, 18], [0, 1], { ...clamp, easing: Easing.out(Easing.back(1.8)) }), filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.7))" }} />
      <div style={{ position: "absolute", bottom: 120, display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
        {prezzo ? <div style={{ fontFamily: sans, fontWeight: 900, fontSize: 96, color: "white" }}>{prezzo}</div> : null}
        <div style={{ fontFamily: sans, fontWeight: 800, fontSize: 50, color: "#1a1206", background: "linear-gradient(180deg,#fff0b8,#d9a93a)", padding: "18px 46px", borderRadius: 60, opacity: interpolate(frame, [12, 22], [0, 1], clamp) }}>
          🚚 Paghi alla consegna
        </div>
        <div
          style={{
            fontFamily: sans,
            fontWeight: 900,
            fontSize: 70,
            color: "white",
            background: "linear-gradient(180deg,#2b2b2b,#000)",
            border: "4px solid #e2b54b",
            padding: "30px 80px",
            borderRadius: 100,
            scale: frame > 20 ? pulsa : 0,
            boxShadow: "0 0 40px rgba(226,181,75,0.5)",
          }}
        >
          {cta}
        </div>
        <div style={{ fontFamily: sans, fontWeight: 600, fontSize: 38, color: "rgba(255,255,255,0.8)" }}>Offerta valida fino al {scadenza}</div>
      </div>
    </Sfondo>
  );
};
