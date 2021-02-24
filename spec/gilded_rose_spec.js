/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import Shop from '../src/gilded_rose'
import Item from '../src/Item'
import RareItem from '../src/RareItem'
import LegendaryItem from '../src/LegendaryItem'

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
    listItems.push(new RareItem('Aged Brie', 20, 30));
    listItems.push(
      new RareItem('Backstage passes to a TAFKAL80ETC concert', 20, 30)
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

  it('Augmenter la qualité de 2 pour Aged Brie et Backstage passes pour sellIn compris entre 11 et 5', () => {
    listItems.push(new RareItem('Aged Brie', 8, 30));
    listItems.push(
      new RareItem('Backstage passes to a TAFKAL80ETC concert', 8, 30)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 7, quality: 32 },
      { sellIn: 7, quality: 32 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it('Augmenter la qualité de 3 pour Aged Brie et Backstage passes pour sellIn <= 5', () => {
    listItems.push(new RareItem('Aged Brie', 5, 30));
    listItems.push(
      new RareItem('Backstage passes to a TAFKAL80ETC concert', 4, 30)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: 4, quality: 33 },
      { sellIn: 3, quality: 33 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it('Verifier que la qualité de Sulfuras ne se modifie pas', () => {
    listItems.push(new LegendaryItem('Sulfuras, Hand of Ragnaros', 5, 80));

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
    listItems.push(new RareItem('Aged Brie', 5, 50));
    listItems.push(
      new RareItem('Backstage passes to a TAFKAL80ETC concert', 9, 50)
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
      new RareItem('Backstage passes to a TAFKAL80ETC concert', 0, 50)
    );

    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: -1, quality: 0},
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
      { sellIn: -1, quality: 18 },
      { sellIn: -1, quality: 4 },
    ];
    expected.forEach((testCase, idx) => {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("Verifier que le quality ne soit jamais négative.", () => {
    listItems.push(new Item('+5 Dexterity Vest', 0, 0));
    listItems.push(new Item('Mana Cake', 10, 0));
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.updateQuality();

    const expected = [
      { sellIn: -1, quality: 0},
      { sellIn: 9, quality: 0 },
      
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
