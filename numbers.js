let favNumber = 42;
let baseURL = "http://numbersapi.com/";

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
    let response = await axios.get(`${baseURL}/${favNumber2}?json`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data for part2: ", error);
  }
}
part2();
