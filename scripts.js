const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const millisecond = document.querySelector(".millisecond");
function update() {
  const currentUTC = new Date();
  currentUTC.setUTCHours(currentUTC.getUTCHours() + 6);

  const hours = currentUTC.getUTCHours();
  const minutes = currentUTC.getUTCMinutes();
  const seconds = currentUTC.getUTCSeconds();
  const milliseconds = currentUTC.getMilliseconds();

  hour.innerHTML = `Hour ${hours<13 ? hours : hours % 12 }`;
  minute.innerHTML = `Minute ${minutes}`;
  second.innerHTML = `Second ${seconds}`;
  //   ${seconds.toString(2).padStart(6, "0")}
  millisecond.innerHTML = `Millisecond ${milliseconds}`;

  const paded_hour = hours.toString(2).padStart(6, "0");
  for (let i = 0; i < 6; i++) {
    const div = document.getElementById(`h${i}`);
    if (paded_hour[i] === "1") {
      div.classList.add("bg-green-500");
    } else {
      div.classList.remove("bg-green-500");
    }
  }

  const paded_minute = minutes.toString(2).padStart(6, "0");
  for (i = 0; i < 6; i++) {
    const div = document.getElementById(`m${i}`);
    if (paded_minute[i] === "1") {
      div.classList.add("bg-green-500");
    } else {
      div.classList.remove("bg-green-500");
    }
  }

  const paded_second = seconds.toString(2).padStart(6, "0");
  for (i = 0; i < 6; i++) {
    const div = document.getElementById(`s${i}`);
    if (paded_second[i] === "1") {
      div.classList.add("bg-green-500");
    } else {
      div.classList.remove("bg-green-500");
    }
  }

  const paded_msecond = milliseconds.toString(2).padStart(6, "0");
  for (i = 0; i < 6; i++) {
    const div = document.getElementById(`ms${i}`);
    if (paded_msecond[i] === "1") {
      div.classList.add("bg-green-500");
    } else {
      div.classList.remove("bg-green-500");
    }
  }
}
setInterval(update, 100);
const t = document.querySelector(".t");
t.innerHTML = "Made by Obaidur🤍";
