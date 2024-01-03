import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Dropdown, DropdownDivider, DropdownItem, Label } from 'semantic-ui-react'

export default function CartSummary() {

	const { cartItems } = useSelector(state => state.cart)

	return (
		<div>
			<Dropdown item text='Sepetiniz'>
				<Dropdown.Menu>
					{
						cartItems.map((cartItem) => (
							<Dropdown.Item key={cartItem.product.id}>
								{cartItem.product.productName}
								<Label>
									{cartItem.quantity}
								</Label>
							</Dropdown.Item>
						))
					}
					<DropdownDivider />
					<DropdownItem as={NavLink} to="/cart">Sepete git</DropdownItem>
				</Dropdown.Menu>
			</Dropdown>
		</div >
	)
}
