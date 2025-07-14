import http from "../../http";
import type { ProdutoProps } from "../interface/produto";

const findAll = async () => {
	const response = await http.get<ProdutoProps[]>("produtos");

	return response.data;
};

const searchName = async (name: string) => {
	const response = await http.get<ProdutoProps[]>(`produtos?name=${name}`);

	console.log(response.data);
	return response.data;
};

const produtoService = {
	findAll,
	searchName
}

export default produtoService;
