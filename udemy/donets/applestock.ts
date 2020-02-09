class profitable {

    constructor(buyIndex: number, buyPrice: number, sellIndex: number, sellPrice: number, profit: number) {
        this.buyIndex = buyIndex;
        this.buyPrice = buyPrice;
        this.sellIndex = sellIndex;
        this.sellPrice = sellPrice;
        this.margin = profit;
    }

    buyIndex: number;
    buyPrice: number;
    sellIndex: number;
    sellPrice: number;
    margin: number;
};

function getMaxProfit(stockPrices: number[]): profitable {

    let profitableIndex: profitable = new profitable(-1, 0, -1, 0, 0);
    for (let i: number = 0; i < stockPrices.length; i++) {
        for (let j: number = i + 1; j < stockPrices.length; j++) {
            let currentMargin: number = stockPrices[j] - stockPrices[i];
            //profitableIndex.push(new profitable(i, j, currentMargin));
            if (profitableIndex.buyIndex === -1 || profitableIndex.margin < currentMargin) {
                profitableIndex = new profitable(i, stockPrices[i], j, stockPrices[j], currentMargin);
            }
        }
    }
    console.log(profitableIndex);
    return profitableIndex;
}

const stockPrices = [10, 7, 5, 8, 11, 9];
const mostProfit = getMaxProfit(stockPrices);