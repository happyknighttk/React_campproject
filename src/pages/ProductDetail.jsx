import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
	let { id } = useParams()

	const [product, setProduct] = useState({})

	useEffect(() => {
		let productService = new ProductService()
		productService.getProductById(id).then(result => setProduct(result.data))
	})

	return (
		<div>
			<br></br>
			<Card.Group>
				<Card fluid size="large">
					<Card.Content>
						<Card.Header>{product.productName}</Card.Header>
						<Card.Meta>{product.categoryName}</Card.Meta>
						<Card.Description>
							Fiyat: {product.unitPrice} $<br />
							Stok adedi: {product.unitsInStock} adet <br />
							{product.quantityPerUnit}
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className='ui two buttons'>
							<Button basic color='green'>
								Satın al
							</Button>
							{/*<Button basic color='red'>
								Decline
							</Button>*/}
						</div>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>
	)
}
