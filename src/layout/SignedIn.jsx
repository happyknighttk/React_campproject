import React from 'react'
import { Dropdown, DropdownMenu, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({ signOut }) {
	return (
		<div>
			<Menu.Item>
				<Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQE2SILWTgjdKg/profile-displayphoto-shrink_800_800/0/1687647889997?e=2147483647&v=beta&t=3iHB-fbv-kY2flTIQ7uWsB4ckR8DuuEyNmRcf4fWH2A" />
				<Dropdown pointing="top left" text='Tolga'>
					<DropdownMenu>
						<Dropdown.Item text="Bilgilerim" icon="info" />
						<Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />
					</DropdownMenu>
				</Dropdown>
			</Menu.Item>
		</div>
	)
}
