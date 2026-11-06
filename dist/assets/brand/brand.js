(() => {
  const logoPath = "assets/brand/pickup-logo-concept-v1.png";
  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = "assets/brand/brand.css";
  document.head.append(stylesheet);

  document.querySelectorAll("a.brand, a.mobile-brand").forEach((brand) => {
    const logo = document.createElement("img");
    logo.src = logoPath;
    logo.alt = "Pickup";
    logo.width = 2172;
    logo.height = 724;
    logo.decoding = "async";
    brand.replaceChildren(logo);
    brand.classList.add("brand--art");
    brand.setAttribute("aria-label", "Pickup home");
  });
})();
