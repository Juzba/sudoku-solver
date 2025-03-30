import axios from "axios";

const AxiosComp = async (url: string, data: number[][][]) => {
console.log("AxiosComp Start!");


	try {
		const response = await axios.post(url, data);
		console.log("odpověd?" + response.data);






		if (response.data.success) {
			console.log("Data była úspěšně zpracována.");
		} else {
			console.log("Něco se pokazilo:", response.data.message);
		}



	} catch (error) {
		console.error("chyba při odesílaní dat axios: " + error);
	}
};

export default AxiosComp;
