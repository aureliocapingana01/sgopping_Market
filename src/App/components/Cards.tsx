import type { Produto } from "../interface/produto";
import Button from "./Button";

const Cards = ({ item }: Produto) => {
	return (
		<div className="flex h-96 w-64 flex-col justify-center rounded-2xl bg-white p-2">
			<div className="flex justify-center">
				<img
					className="h-40 rounded-t-lg object-cover"
					alt={item.name}
					src={`http://localhost:5173/public/assets/produtos/${item.image}.webp`}
				></img>
			</div>
			<div className="flex flex-col gap-2 p-4">
				<div className="item-center mb-2 flex justify-center">
					<span className="capitalize text-center font-bold">{item.name} </span>
				</div>
				<div className="item-center flex justify-center">
					<span>R$ {item.price} </span>
				</div>
			</div>
			<Button>Adicionar no Carrinho</Button>
		</div>
	);
};

export default Cards;
