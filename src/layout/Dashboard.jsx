import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";

export default function Dashboard() {
	return (
		<div>
			<Grid>
				<GridRow>
					<GridColumn width={4}>
						<Categories />
					</GridColumn>
					<GridColumn width={12}>
						<Routes>
							<Route exact path="/" Component={ProductList} />
							<Route path="/products" Component={ProductList} />
							<Route path="/products/:id" Component={ProductDetail} />
							<Route path="/cart" Component={CartDetail} />

						</Routes>
					</GridColumn>
				</GridRow>
			</Grid>
		</div>
	);
}
