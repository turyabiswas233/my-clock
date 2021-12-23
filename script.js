function setDate() {
    const hr = document.querySelector(".hour");
    const mn = document.querySelector(".minute");
    const sc = document.querySelector(".seconds");

    const time = new Date();
    const seconds = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const scdeg = seconds * 6;
    const mndeg = minute * 6;
    const hrdeg = (hour * 5 + minute / 12) * 6;

    sc.style.transform = `rotate(${scdeg}deg)`;
    mn.style.transform = `rotate(${mndeg}deg)`;
    hr.style.transform = `rotate(${hrdeg}deg)`;
    // console.log(`HH:MM:SS => ${hour}:${minute}:${seconds}`)
    console.log(scdeg);
}

setInterval(setDate, 1000);
