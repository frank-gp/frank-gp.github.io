function statFn() {
  // Truncar URLs a un máximo de 100 caracteres
  const maxLength = 100;
  var currentURL = window.location.href.substring(0, maxLength);
  var referrerURL = document.referrer.substring(0, maxLength);

  fetch("https://app.frankgp.com/api/stat/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      currentURL,
      referrerURL,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      console.log("Data sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
}

if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
  statFn();
}
