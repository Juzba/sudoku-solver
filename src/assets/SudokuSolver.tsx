import { useState } from "react";
import AxiosComp from "./AxiosComp";
import "./SudokuSolver.scss";

const url = "https://localhost:7207/api/sudoku/array";

const SudokuSolver = () => {
	const [sudokuArray, setSudokuArray] = useState<number[][][]>(
		new Array(9).fill(null).map(() => new Array(9).fill(null).map(() => new Array(10).fill(0)))
	);

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
			<button onClick={() => sendData()}>Send Data</button>

			<div className="sudoku">
				{/* /// Big Sections 9x  */}
				{sudokuArray.map((oneSection, indexX) => {
					return (
						<section className="section" key={indexX}>
							{/* /// Small boxies 9x */}
							{oneSection.map((OneNumber, indexY) => {
								return (
									<div className={"pole"} key={indexY}>
										<input
											readOnly
											value={OneNumber[0] !== 0 ? OneNumber[0] : ""}
											onKeyDown={(e) => addNumberToArray(indexX, indexY, e)}
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
							})}
						</section>
					);
				})}
			</div>
		</div>
	);
};

export default SudokuSolver;
