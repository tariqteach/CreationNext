const hColor = { color: "blue", fontSize: "25px" };
export default function Header(props) {
  return (
    <>
      <div>{props.title}</div>
      <div style={{ color: "red", fontSize: "60px" }}>Header</div>
      <div style={hColor}>Header-Conent</div>
    </>
  );
}
