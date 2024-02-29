import Hills from "../assets/pattern-hills.svg";

function Footer() {
  return (
    <div className="relative h-full">
      <img
        src={Hills}
        className="absolute bottom-0 right-0 w-full"
        alt="Hills pattern"
      />
    </div>
  );
}

export default Footer;
