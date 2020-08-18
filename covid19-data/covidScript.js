console.log("index.html 7 | Get Covid Data");
const getCovidData = async () => {
    console.log("index.html 10 | Processing...");
    const request = await fetch("https://covid19.mathdro.id/api");
    const data = await request.json();
    return data;
};
getCovidData().then(covidData => {
    console.log("index.html 16 | covid data", covidData);
    document.getElementById("total-cases").innerText =
        covidData.confirmed.value;
});