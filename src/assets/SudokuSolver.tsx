import { useState } from "react";
import AxiosComp from "./AxiosComp";
import "./SudokuSolver.scss";

const url = "https://localhost:7207/api/sudoku/array";

const SudokuSolver = () => {
	const createNullArray: number[][][] = new Array(9).fill(null).map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)));
	const [sudokuArray, setSudokuArray] = useState<number[][][]>(createNullArray);


	const sendData = () => {
		if (sudokuArray) {
			AxiosComp(url, sudokuArray);
		} else console.error("Sudoku array neexistuje, nemůže odeslat null pole.");
	};

	const addNumberToArray = (indexX: number, indexY: number, e: React.KeyboardEvent) => {
		const key = e.key;

		if (key >= "0" && key <= "9") {
			e.preventDefault(); // Zabránit výchozímu chování

			const newSudokuArray = sudokuArray.map((arr) => [...arr]);
			newSudokuArray[indexX][indexY][0] = parseInt(key, 10);
			setSudokuArray(newSudokuArray);
		}
	};

	return (
		<div className="sudoku-solver">
			<h1>Extreme sudoku solver.</h1>
			<div className="buttons">
				<button onClick={() => sendData()}>Send Data</button>
				<button onClick={() => setSudokuArray(createNullArray)}>Clear</button>
				<button onClick={() => sendData()}>Memory 1</button>
				<button onClick={() => sendData()}>Memory 2</button>
			</div>

			<div className="sudoku">
				{sudokuArray.map((oneSection, indexY) =>
					oneSection.map((OneNumber, indexX) => {
						const index = indexX + indexY * 10;
						return (
							<div className={"pole"} key={index}>
								{/* {index} */}
								<input
									readOnly
									value={OneNumber[0] !== 0 ? OneNumber[0] : ""}
									onKeyDown={(e) => addNumberToArray(indexY, indexX, e)}
									type="number"
								/>

								{/* // Small numbers 9x */}
								<div className="small-numbers">
									{OneNumber.map((OneSmallNum, indexZ) => {
										if (indexZ === 0 || OneNumber[0] || OneSmallNum === 0) return;
										return <span key={indexZ}>{OneSmallNum}</span>;
									})}
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default SudokuSolver;
