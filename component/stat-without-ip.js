function statFn() {
  let time = new Date().toLocaleString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  var currentURL = window.location.href;
  var referrerURL = document.referrer;

  console.log(time);

  fetch("https://fgp.one/stat/received_data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      time: time,
      currentURL: currentURL,
      referrerURL: referrerURL,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Data sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
}

if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
  statFn();
}
