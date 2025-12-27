(function () {
  const now = new Date();
  const month = now.getMonth(); // 0 = Jan, 11 = Dec
  const day = now.getDate();

  // Enable snow: Dec 1 → Jan 5
  const isHolidaySeason =
    (month === 11) || // December
    (month === 0 && day <= 5); // January 1–5

  if (!isHolidaySeason) return;

  const snowCount = 40;

  for (let i = 0; i < snowCount; i++) {
    const snowflake = document.createElement("div");
    snowflake.textContent = "❄";

    snowflake.style.position = "fixed";
    snowflake.style.top = Math.random() * -100 + "px";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
    snowflake.style.opacity = Math.random();
    snowflake.style.pointerEvents = "none";
    snowflake.style.zIndex = "9999";

    document.body.appendChild(snowflake);

    animateSnowflake(snowflake);
  }

  function animateSnowflake(el) {
    let y = parseFloat(el.style.top);
    const speed = Math.random() * 0.5 + 0.5;

    function fall() {
      y += speed;
      el.style.top = y + "px";

      if (y > window.innerHeight) {
        y = -20;
        el.style.left = Math.random() * 100 + "vw";
      }

      requestAnimationFrame(fall);
    }

    fall();
  }
})();
