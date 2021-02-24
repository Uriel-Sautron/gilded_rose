/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import Shop from '../src/gilded_rose'
import Item from '../src/Item'

describe('GildedRose shop manager', () => {
  let listItems;

  beforeEach(() => {
    listItems = [];
  });

  it("Baisser de 1 la qualité et sellIn d'item normaux", () => {
    listItems.push(new Item('+5 Dexterity Vest', 10, 20));
    listItems.push(new Item('Mana Cake', 3, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 2, quality: 5 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it('Augmenter la qualité de 1 pour Aged Brie et Backstage passes', () => {
    listItems.push(new Item('Aged Brie', 20, 30));
    listItems.push(
      new Item('Backstage passes to a TAFKAL80ETC concert', 20, 30)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 19, quality: 31 },
      { sellIn: 19, quality: 31 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it('Augmenter la qualité de 3 pour Aged Brie et Backstage passes', () => {
    listItems.push(new Item('Aged Brie', 5, 30));
    listItems.push(
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 4, quality: 33 },
      { sellIn: 4, quality: 33 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it('Verifier que la qualité de Sulfuras ne se modifie pas', () => {
    listItems.push(new Item('Sulfuras, Hand of Ragnaros', 5, 80));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 5, quality: 80 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it('Verifier que la qualité ne depasse pas 50 pour Aged Brie et Backstage passes', () => {
    listItems.push(new Item('Aged Brie', 5, 50));
    listItems.push(
      new Item('Backstage passes to a TAFKAL80ETC concert', 9, 50)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 4, quality: 50},
      { sellIn: 8, quality: 50 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it('Verifier que la qualité de Backstage passes tombe à 0 après le concert', () => {
    listItems.push(
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 0, quality: 0},
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Baisser de 2 la qualité d'item normaux quand sellIn = 0", () => {
    listItems.push(new Item('+5 Dexterity Vest', 0, 20));
    listItems.push(new Item('Mana Cake', 0, 6));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 0, quality: 18 },
      { sellIn: 0, quality: 4 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Verifier que le sellIn ne soit jamais négative.", () => {
    listItems.push(new Item('+5 Dexterity Vest', 0, 20));
    listItems.push(new Item('Mana Cake', 0, 6));
    listItems.push(new Item('Aged Brie', 0, 50));
    listItems.push(
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 0, quality: 18 },
      { sellIn: 0, quality: 4 },
      { sellIn: 0, quality: 50 },
      { sellIn: 0, quality: 0 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Baisser de 2 la qualité d'item Conjured", () => {
    listItems.push(new Item('Conjured Dark Blade', 10, 20));
    listItems.push(new Item('Conjured Magic Stick', 15, 40));

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 9, quality: 18 },
      { sellIn: 14, quality: 38 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });
});
