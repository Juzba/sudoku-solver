import { useState } from "react";
import "./SudokuSolver.scss";

const SudokuSolver = () => {
	const [sudokuArray, setSudokuArray] = useState(new Array(9).fill(null).map(() => new Array(9).fill(0)));

	console.log(sudokuArray);

	const addNumberToArray = (indexX: number, indexY: number, e: React.KeyboardEvent) => {
		const key = e.key;

		if (key >= "0" && key <= "9") {
			e.preventDefault(); // Zabránit výchozímu chování

			const newSudokuArray = sudokuArray.map((arr) => [...arr]);
			newSudokuArray[indexX][indexY] = parseInt(key, 10);
			setSudokuArray(newSudokuArray);
		}
	};

	return (
		<div className="sudoku-solver">
			<h1>Extreme sudoku solver.</h1>

			<div className="sudoku">
				{sudokuArray.map((item, indexX) => {
					return (
						<section className="section" key={indexX}>
							{item.map((item, indexY) => {
								return (
									<div className="pole" key={indexY}>
										<input
											value={item !== 0 ? item : ""}
											onKeyDown={(e) => addNumberToArray(indexX, indexY, e)}
											type="number"
										/>
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
