import { useQuery } from "react-query";
import Input from "./Input";
import produtoService from "../service/produto.service";
import { type ProdutoProps } from "../interface/produto";
import { useState, type ChangeEvent } from "react";

const Header = () => {

	const [produtoName, setProdutoName] = useState('')

	const {
		data: produtoByName,
		isLoading,
		error,
	} = useQuery<ProdutoProps[], Error>("query-produto-by-name", async () => {
		return produtoService.searchName(produtoName);
	});

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setProdutoName(value)
	}

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
					<Input onChange={(e) => handleInput(e)} />
					<ul>
						{
							produtoByName?.map((produto: ProdutoProps) => {
								return (
									<li>
										{produto.name}
									</li>
								)
							})
						}
					</ul>
				</div>
				<div>Carrinho</div>
			</div>
		</header>
	);
};

export default Header;
