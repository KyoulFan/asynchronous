document.addEventListener("DOMContentLoaded", () => {
  const baseURL = "https://deckofcardsapi.com/api/deck";
  const button = document.querySelector("button");
  const cardArea = document.querySelector("#card-area");
  let deckId = null;

  //Polished by ChatGPT
  //Step 1: note it is just return an ID from the API, not out put
  async function initDeck() {
    try {
      const res = await axios.get(`${baseURL}/new/shuffle/?deck_count=1`);
      deckId = res.data.deck_id;
      console.log("Deck initialized:", deckId);
    } catch (err) {
      console.error("Error initializing deck:", err);
    }
  }

  // Step 2: really draw a card
  async function drawOneCard() {
    try {
      if (!deckId) {
        console.warn("Deck not ready yet, initializing...");
        await initDeck();
      }

      const res = await axios.get(`${baseURL}/${deckId}/draw/?count=1`);

      if (res.data.success && res.data.cards.length > 0) {
        const { suit, value, image } = res.data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);

        // 显示到页面
        const img = document.createElement("img");
        img.src = image;
        img.alt = `${value} of ${suit}`;
        img.style.margin = "5px";
        cardArea.appendChild(img);
      } else {
        console.log("No more cards left!");
        button.disabled = true; // 牌用完后禁用按钮
      }
    } catch (err) {
      console.error("Error drawing card:", err);
    }
  }

  // 3. 页面加载时先初始化牌堆
  initDeck();

  // 4. 点击按钮抽牌
  button.addEventListener("click", drawOneCard);
});
