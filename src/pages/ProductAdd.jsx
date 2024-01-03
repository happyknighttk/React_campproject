import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from "yup";
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';

export default function ProductAdd() {

	const initialValues = {
		categoryId: "",
		productName: "",
		unitPrice: "",
		unitsInStock: "",
		quantityPerUnit: ""
	}

	const schema = Yup.object({
		productName: Yup.string().required("Ürün adı zorunlu"),
		unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
		categoryId: Yup.number(),
		unitsInStock: Yup.number().required("Stok sayısı zorunlu"),
		quantityPerUnit: Yup.string()
	})

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={schema}
				onSubmit={(values) => {
					console.log(values)
				}}
			>
				<Form className='ui form'>
					{/* <FormField>
						<Field name="name" placeholder='Ürün Adı' />
						<ErrorMessage name='productName' render={error =>
							<Label pointing basic color='red' content={error}></Label>
						}></ErrorMessage>
					</FormField> */}
					<KodlamaIoTextInput name="productName" placeholder='Ürün Adı' />
					<KodlamaIoTextInput name="unitPrice" placeholder='Birim Fiyatı' />
					<KodlamaIoTextInput name="unitsInStock" placeholder='Stok Adedi' />
					<KodlamaIoTextInput name="quantityPerUnit" placeholder='Açıklama' />
					<KodlamaIoTextInput name="categoryId" placeholder='Kategori Id' />
					<Button color='green' type='submit'>Ürünü Ekle</Button>
				</Form>
			</Formik>
		</div>
	)
}
