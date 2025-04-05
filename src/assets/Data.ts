
const dataArray: number[][][] = new Array(9)
	.fill(null)
	.map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)));

dataArray[0][1][0] = 5;
dataArray[0][2][0] = 3;

dataArray[1][3][0] = 4;
dataArray[1][6][0] = 8;

dataArray[2][1][0] = 7;

dataArray[3][6][0] = 9;
dataArray[3][7][0] = 5;

dataArray[4][0][0] = 6;
dataArray[4][3][0] = 2;

dataArray[5][7][0] = 7;

dataArray[6][0][0] = 8;
dataArray[6][5][0] = 3;
dataArray[6][8][0] = 6;

dataArray[7][4][0] = 9;
dataArray[7][5][0] = 7;

dataArray[8][4][0] = 5;
dataArray[8][6][0] = 4;


const dataArray2: number[][][] = new Array(9)
	.fill(null)
	.map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)));

dataArray2[0][4][0] = 7;
dataArray2[0][5][0] = 9;

dataArray2[1][0][0] = 6;
dataArray2[1][6][0] = 5;

dataArray2[2][1][0] = 9;

dataArray2[3][3][0] = 5;
dataArray2[3][6][0] = 2;

dataArray2[4][1][0] = 8;
dataArray2[4][2][0] = 7;

dataArray2[5][3][0] = 3;

dataArray2[6][0][0] = 5;
dataArray2[6][2][0] = 3;
dataArray2[6][7][0] = 4;

dataArray2[7][4][0] = 8;
dataArray2[7][7][0] = 7;

dataArray2[8][0][0] = 2;
dataArray2[8][3][0] = 6;



const clearArray: number[][][] = new Array(9)
	.fill(null)
	.map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)));

export { dataArray, dataArray2, clearArray };
