import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function
	Kategoriler() {
	return (
		<div>
			<Menu pointing vertical>
				<Menu.Item as={NavLink} to="/"
					name='home'
				/>
				<Menu.Item as={NavLink} to="/product/add"
					name='add-product'
				/>
				<Menu.Item
					name='friends'
				/>
			</Menu>
		</div>
	)
}
