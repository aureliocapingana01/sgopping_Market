import { useQuery } from "react-query";
import Input from "./Input";
import produtoService from "../service/produto.service";
import { type ProdutoProps } from "../interface/produto";
import { useState, type ChangeEvent } from "react";
import { debounce } from "lodash";

const Header = () => {
	const [produtoName, setProdutoName] = useState("");

	const {
		data: produtosByName,
		isLoading,
		error,
	} = useQuery<ProdutoProps[], Error>(
		["query-produtos-by-name", produtoName],
		async () => {
			return produtoService.searchName(produtoName);
		},
		{
			enabled: produtoName.length > 0,
		},
	);

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setProdutoName(value);
	};

	const debounceHandleOnChange = debounce(handleInput, 500);

	return (
		<header className="fixed top-0 right-0 flex w-full justify-center bg-white py-3">
			<div className="mx-auto flex w-11/12 items-center justify-between gap-52">
				<div>
					<a href="/">
						<img
							src="http://localhost:5173/public/assets/logo1.png"
							alt="company logo"
							className="max-w-36"
						/>
					</a>
				</div>
				<div className="w-4/5">
					<Input onChange={debounceHandleOnChange} />
					<ul>
						{produtosByName?.map((produto: ProdutoProps) => {
							return <li key={produto.id}>{produto.name}</li>;
						})}
					</ul>
				</div>
				<div>Carrinho</div>
			</div>
		</header>
	);
};

export default Header;
