import axios from "axios";
import { useState } from "react";

const useAxiosComp = (url: string, data: number[][][]) => {
	const [responseData, setResponse] = useState(null);
	const [error, setError] = useState(null);

	// console.log(responseData);
	
	const sendData = async () => {
		console.log("AxiosComp Start!");
		try {
			const res = await axios.post(url, data);
			console.log("odpověd z web api: " + res.data);
			setResponse(res.data);
		} catch (error) {
			if (error) {
				console.error("chyba při odesílaní dat axios: " + error);
				// setError(error);
			}
		}
	};



	return{responseData, error, sendData}
};

export default useAxiosComp;
