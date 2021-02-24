/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (/^Conjured/.test(this.name)) {
      this.sellIn <= 0 ? (this.quality -= 4) : (this.quality -= 2);
    } else {
      this.sellIn <= 0 ? (this.quality -= 2) : (this.quality -= 1);
    }
    this.quality < 0 ? (this.quality = 0) : this.quality;
    this.sellIn -= 1;
  }
}

export default Item;
