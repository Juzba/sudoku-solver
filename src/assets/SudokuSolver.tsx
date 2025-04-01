import { useEffect, useState } from "react";
import "./SudokuSolver.scss";
import UseAxios from "./UseAxios";

interface SudokuResponse {
	returnedText: string;
	success: boolean;
	returnedArray: number[][][];
}

const url = "https://localhost:7214/api/sudoku";

const SudokuSolver = () => {
	const createNullArray: number[][][] = new Array(9)
		.fill(null)
		.map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)));
	const [sudokuArray, setSudokuArray] = useState<number[][][]>(createNullArray);
	const [returnedText, setReturnedText] = useState<string | null>(null);
	const { error, loading, fetchData } = UseAxios(url);

	const sendArray = async () => {
		const vysledek = await fetchData(sudokuArray);

		const typedResult = vysledek as SudokuResponse;
		const { returnedText, success, returnedArray } = typedResult;

		if (success) {
			if (returnedArray.length === 9 && returnedArray[0].length === 9 && returnedArray[0][0].length === 10)
				setSudokuArray(returnedArray); // must be number [9][9][10]

			setReturnedText(returnedText);
		}
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
				<button onClick={() => sendArray()}>Send Data</button>
				<button onClick={() => setSudokuArray(createNullArray)}>Clear</button>
				{/* <button onClick={() => sendData()}>Memory 1</button>
				<button onClick={() => sendData()}>Memory 2</button> */}
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
			<p>{returnedText ? returnedText : "Žádný text!"}</p>
		</div>
	);
};

export default SudokuSolver;
