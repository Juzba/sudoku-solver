const dataArray: number[][][] = new Array(9)
	.fill(null)
	.map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)));

   dataArray[0][0][0] = 1
   dataArray[0][1][0] = 8
   dataArray[0][2][0] = 5
   dataArray[0][4][0] = 3
   dataArray[0][5][0] = 9
   dataArray[0][6][0] = 7
   dataArray[1][1][0] = 2
   dataArray[1][2][0] = 7
   dataArray[1][3][0] = 4
   dataArray[1][4][0] = 5
   dataArray[1][5][0] = 6
   dataArray[1][6][0] = 8
   dataArray[1][7][0] = 3
   dataArray[1][8][0] = 1
   dataArray[2][3][0] = 8
   dataArray[2][4][0] = 7
   dataArray[2][6][0] = 2
   dataArray[2][7][0] = 9
   dataArray[2][8][0] = 5
   dataArray[3][0][0] = 2
   dataArray[3][1][0] = 7
   dataArray[3][2][0] = 9
   dataArray[3][3][0] = 3
   dataArray[3][8][0] = 8
   dataArray[4][1][0] = 3
   dataArray[4][2][0] = 6
   dataArray[4][3][0] = 5
   dataArray[4][4][0] = 1
   dataArray[4][6][0] = 9
   dataArray[4][8][0] = 7

   dataArray[5][0][0] = 5
   dataArray[5][1][0] = 1
   dataArray[5][6][0] = 6

   dataArray[6][0][0] = 6
   dataArray[6][1][0] = 9
   dataArray[6][2][0] = 1
   dataArray[6][4][0] = 4
   dataArray[6][5][0] = 5
   dataArray[6][6][0] = 3
   dataArray[6][7][0] = 8

   dataArray[7][2][0] = 2
   dataArray[7][3][0] = 1
   dataArray[7][4][0] = 9
   dataArray[7][5][0] = 8

   dataArray[8][0][0] = 7
   dataArray[8][1][0] = 5
   dataArray[8][2][0] = 8
   dataArray[8][3][0] = 6
   dataArray[8][7][0] = 1
   dataArray[8][8][0] = 9

  
  

export { dataArray };
