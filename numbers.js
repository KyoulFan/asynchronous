let favNumber = 42;
let baseURL = "https://numbersapi.com";

async function part1() {
  try {
    let response = await axios.get(`${baseURL}/${favNumber}?json`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data for part1: ", error);
  }
}
part1();

const favNumber2 = [7, 11, 22];
async function part2() {
  try {
    let response = await axios.get(`${baseURL}/${favNumber2.join(",")}?json`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data for part2: ", error);
  }
}
part2();

async function part3() {
  const button = document.getElementById("get-facts");
  button.addEventListener("click", clickAndDisplayData);

  async function clickAndDisplayData() {
    try {
      let facts = await Promise.all(
        Array.from({ length: 4 }, () =>
          axios.get(`${baseURL}/${favNumber}?json`)
        )
      );
      facts.forEach((response) => {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<p>${response.data.text}</p>`
        );
      });
    } catch (error) {
      console.error("Error fetching data for part3: ", error);
    }
  }
}
part3();
