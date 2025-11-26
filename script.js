// --- JAVASCRIPT VOOR DE AFTELKLOK ---

// Stel hier de datum en tijd van je fuif in!
// De fuif start op 20 maart 2026 om 21:00:00.
const fuifDatum = new Date("May 2, 2026 21:00:00").getTime();

// Haal het HTML-element op waar de klok moet verschijnen
const countdownElement = document.getElementById("countdown");

// Update de klok elke seconde
const x = setInterval(function() {

  // Huidige datum en tijd
  const nu = new Date().getTime();

  // Bereken de afstand tussen nu en de fuifdatum
  const afstand = fuifDatum - nu;

  // Tijd berekeningen voor dagen, uren, minuten en seconden
  const dagen = Math.floor(afstand / (1000 * 60 * 60 * 24));
  const uren = Math.floor((afstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minuten = Math.floor((afstand % (1000 * 60 * 60)) / (1000 * 60));
  const seconden = Math.floor((afstand % (1000 * 60)) / 1000);

  // Formatteer de output in de HTML met de 'time-block' containers
  countdownElement.innerHTML =
    "<div class='time-block'><span class='time-unit'>" + dagen + "</span><span class='label'> Dagen</span></div>" +
    "<div class='time-block'><span class='time-unit'>" + uren + "</span><span class='label'> Uren</span></div>" +
    "<div class='time-block'><span class='time-unit'>" + minuten + "</span><span class='label'> Minuten</span></div>" +
    "<div class='time-block'><span class='time-unit'>" + seconden + "</span><span class='label'> Seconden</span></div>";

  // Als de aftelling voorbij is (afstand is negatief)
  if (afstand < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "🎉 **HET FEEST IS BEGONNEN!** 🎉";
    countdownElement.style.color = "#ff007f";
    countdownElement.style.fontSize = "2em";
  }

}, 1000); // 1000ms = 1 seconde 
