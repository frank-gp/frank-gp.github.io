function statFn() {
  let time = new Date().toLocaleString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  // Truncar URLs a un máximo de 1000 caracteres
  const maxLength = 100;
  var currentURL = window.location.href.substring(0, maxLength);
  var referrerURL = document.referrer.substring(0, maxLength);

  console.log(time);

  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((ipData) => {
      const {
        ip,
        city,
        country_name: countryName,
        timezone,
        utc_offset: utcOffset,
        country_calling_code: countryCallingCode,
        currency,
        currency_name: currencyName,
        languages,
        country_population: countryPopulation,
        org,
      } = ipData;

      fetch("https://fgp.one/api/stat/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          time,
          currentURL,
          referrerURL,
          ip,
          city,
          countryName,
          timezone,
          utcOffset,
          countryCallingCode,
          currency,
          currencyName,
          languages,
          countryPopulation,
          org,
        }),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Network response was not ok");
          console.log("Data sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending data:", error);
        });
    })
    .catch((error) => {
      console.error("Error fetching IP data:", error);
    });
}

if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
  statFn();
}
