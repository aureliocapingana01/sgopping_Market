// import { useEffect } from "react"
import Cards from "../components/Cards";
import findAll from "../service/produto.service";
import { useQuery } from "react-query";
import type { ProdutoProps } from "../interface/produto";
import produtoService from "../service/produto.service";

const Home = () => {
	// 	useEffect(() => {
	// 		findAll().then((res) => console.log(res))
	// 	})

	const {
		data: produtos,
		error,
		isLoading,
	} = useQuery<ProdutoProps[], Error>("query-produtos", async () => {
		return await produtoService.findAll();
	});
	return (
		<div className="mt-32 h-4/5 w-full flex flex-col items-center justify-center gap-16">
			
			<div className="grid h-5/6 w-11/12 grid-cols-4 gap-4 overflow-x-auto">
				{produtos?.map((produto: ProdutoProps) => {
					return <Cards key={produto.id} item={produto} />;
				})}
			</div>
		</div>
	);
};

export default Home;
