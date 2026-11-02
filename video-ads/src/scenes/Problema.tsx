import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

// Scena 2: il problema/dolore del cliente.
export const Problema: React.FC<{ testo: string; accento: string }> = ({ testo, accento }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ backgroundColor: "#111", justifyContent: "center", padding: "0 80px" }}>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          fontSize: 88,
          lineHeight: 1.15,
          color: "white",
          textAlign: "center",
          translate: `0 ${interpolate(frame, [0, 15], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })}px`,
          opacity: interpolate(frame, [0, 10], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}
      >
        {testo}
      </div>
      <div
        style={{
          height: 14,
          backgroundColor: accento,
          borderRadius: 7,
          marginTop: 50,
          alignSelf: "center",
          width: interpolate(frame, [10, 30], [0, 500], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }),
        }}
      />
    </AbsoluteFill>
  );
};
