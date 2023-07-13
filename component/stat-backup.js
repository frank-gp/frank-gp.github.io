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
fetch("https://ipapi.co/json/")
  .then((response) => response.json())
  .then((data) => {
    // Extract the required data
    const ip = data.ip;
    const city = data.city;
    const countryName = data.country_name;
    const timezone = data.timezone;
    const utcOffset = data.utc_offset;
    const countryCallingCode = data.country_calling_code;
    const currency = data.currency;
    const currencyName = data.currency_name;
    const languages = data.languages;
    const countryPopulation = data.country_population;
    const org = data.org;

    // Create the data object to be sent to the server
    const formData = new FormData();
    formData.append("time", time);
    formData.append("currentURL", currentURL);
    formData.append("referrerURL", referrerURL);
    formData.append("ip", ip);
    formData.append("city", city);
    formData.append("countryName", countryName);
    formData.append("timezone", timezone);
    formData.append("utcOffset", utcOffset);
    formData.append("countryCallingCode", countryCallingCode);
    formData.append("currency", currency);
    formData.append("currencyName", currencyName);
    formData.append("languages", languages);
    formData.append("countryPopulation", countryPopulation);
    formData.append("org", org);

    // Send the data to insert_data.php using AJAX
    fetch("https://s.fgp.one/insert_data.php", {
    // fetch("insert_data.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Handle the response from the server
        console.log("Data sent successfully!");
      })
      .catch((error) => {
        console.log("Error sending data:", error);
      });
  })
  .catch((error) => {
    console.log("Error fetching IP data:", error);
  });