import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { updateProduct } from '../../../redux/productRedux'
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage'
import app from '../AddProduct/firebase'
import { publicRequest } from '../../Utils'

const Container = styled.div`
	width: fit-content;
	margin: auto;
	padding-bottom: 100px;
`
const UpdateProductForm = styled.form`
	width: fit-content;
	margin-top: 20px;
	margin-left: 0px;
`

const UpdateProductItem = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
`

const UpdateProductButton = styled.div`
	float: right;
	margin-top: 5px;
	padding: 10px 10px;
	border: none;
	border-radius: 5px;
	width: 160px;
	text-align: center;
	text-transform: uppercase;
	background-color: #000;
	color: white;
	font-weight: 600;
	cursor: pointer;
	@media (max-width: 768px) {
		width: 140px;
	}
`
const Label = styled.label`
	margin-bottom: 5px;
	font-weight: bold;
`
const Input = styled.input`
	width: 450px;
	padding: 10px;
	@media (max-width: 768px) {
		width: 330px;
	}
`

const TextArea = styled.textarea`
	min-width: 450px;
	max-width: 450px;
	min-height: 100px;
	max-height: 500px;
	padding: 10px;
	@media (max-width: 768px) {
		min-width: 330px;
		max-width: 330px;
	}
`

const Select = styled.select`
	padding: 10px;
`
const Option = styled.option``

export default function UpdateProduct() {
	const [inputs, setInputs] = useState({})
	const [file, setFile] = useState(null)
	const [error, setError] = useState(false)
	const location = useLocation()
	const id = location.pathname.split('/')[2]

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/find/' + id)
				setInputs(res.data)
				// console.log(res.data)
			} catch (err) {
				console.log(err.message)
			}
		}
		getProduct()
	}, [id])

	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		try {
			setError(false)

			if (file !== null) {
				const fileName = new Date().getTime() + file.name
				const storage = getStorage(app)
				const storageRef = ref(storage, fileName)
				const uploadTask = uploadBytesResumable(storageRef, file)
				uploadTask.on(
					'state_changed',
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100
						console.log(progress)
						switch (snapshot.state) {
							case 'paused':
								console.log('Upload is paused')
								break
							case 'running':
								console.log('Upload is running')
								break
							default:
						}
					},
					(error) => {
						setError(true)
						console.log(error.message)
					},
					() => {
						getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
							const product = { ...inputs, img: downloadURL }
							updateProduct(product._id, product, dispatch)
						})
					}
				)
			} else {
				const product = { ...inputs }
				updateProduct(product._id, product, dispatch)
			}
		} catch (error) {
			console.log(error.message)
			setError(true)
		}
	}

	return (
		<Container>
			<UpdateProductForm>
				<h1>UPDATE PRODUCT</h1>
				<img
					src={inputs.img}
					style={{
						width: '160px',
						height: '160px',
						objectFit: 'cover',
						marginTop: '15px',
					}}
					alt=""
				/>
				<UpdateProductItem>
					<Label>Image</Label>
					<input
						type="file"
						id="file"
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</UpdateProductItem>
				<UpdateProductItem>
					<Label>Title</Label>
					<Input
						name="title"
						type="text"
						placeholder="Product name*"
						value={inputs.title || ''}
						onChange={handleChange}
					/>
				</UpdateProductItem>
				<UpdateProductItem>
					<Label>Price</Label>
					<Input
						name="price"
						type="number"
						placeholder="Product price*"
						value={inputs.price || ''}
						onChange={handleChange}
					/>
				</UpdateProductItem>
				<UpdateProductItem>
					<Label>Description</Label>
					<TextArea
						name="desc"
						type="text"
						placeholder="Product info*"
						value={inputs.desc || ''}
						onChange={handleChange}
					/>
				</UpdateProductItem>
				<UpdateProductItem>
					<Label>More Info</Label>
					<TextArea
						name="moreInfo"
						type="text"
						placeholder="More details. Not required."
						value={inputs.moreInfo || ''}
						onChange={handleChange}
					/>
				</UpdateProductItem>
				<UpdateProductItem>
					<Select
						name="category"
						defaultValue="Choose a Category*"
						onChange={handleChange}
					>
						<Option disabled>Choose a Category*</Option>
						<Option value="furniture">Furniture</Option>
						<Option value="decor">Decor</Option>
						<Option value="clothes">Clothes</Option>
						<Option value="candles">Candles</Option>
						<Option value="art">Art</Option>
						<Option value="outdoors">Outdoors</Option>
						<Option value="popular">Popular</Option>
					</Select>
				</UpdateProductItem>
				{error && (
					<div style={{ clear: 'both', width: '400px', padding: '10px 0px' }}>
						Something wrong happened. <br /> Please fill all necessary fields
						and try again.
					</div>
				)}
				<UpdateProductButton onClick={handleUpdate}>UPDATE</UpdateProductButton>
			</UpdateProductForm>
		</Container>
	)
}
