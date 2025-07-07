export interface ProdutoProps {
	id: number;
	name: string;
	description: string;
	price: number;
	quantity: number;
	category: string;
	image: string;
}

export interface Produto {
	item: ProdutoProps;
}
