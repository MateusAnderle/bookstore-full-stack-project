export default function Separator({ top = 20, bottom = 20 }) {
  return (
    <div
      style={{
        marginTop: top,
        marginBottom: bottom,
        borderTop: "1px solid #ccc",
      }}
    />
  );
}
