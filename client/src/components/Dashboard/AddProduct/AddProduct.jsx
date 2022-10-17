import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/productRedux'
import {
	getStorage,
	ref,
	uploadBytesResumable,
	getDownloadURL,
} from 'firebase/storage'
import app from './firebase'

const Container = styled.div`
	width: fit-content;
	margin: auto;
`
const AddProductForm = styled.form`
	width: fit-content;
	margin-top: 30px;
	margin-left: 0px;
`

const AddProductItem = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
`

const AddProductButton = styled.div`
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
`
const Label = styled.label`
	margin-bottom: 5px;
	font-weight: bold;
`

const TextArea = styled.textarea`
	min-width: 450px;
	max-width: 450px;
	min-height: 100px;
	max-height: 500px;
	padding: 10px;
`

const Select = styled.select`
	padding: 10px;
`
const Option = styled.option``

export default function AddProduct() {
	const [inputs, setInputs] = useState({})
	const [file, setFile] = useState(null)
	const [error, setError] = useState(false)

	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleCreate = (e) => {
		e.preventDefault()
		try {
			const fileName = new Date().getTime() + file.name
			const storage = getStorage(app)
			const storageRef = ref(storage, fileName)
			const uploadTask = uploadBytesResumable(storageRef, file)

			setError(false)

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
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
						addProduct(product, dispatch)
					})
					window.location.reload()
				}
			)
		} catch (error) {
			setError(true)
		}
	}

	return (
		<Container>
			<AddProductForm>
				<AddProductItem>
					<Label>Image</Label>
					<input
						type="file"
						id="file"
						onChange={(e) => setFile(e.target.files[0])}
					/>
				</AddProductItem>
				<AddProductItem>
					<Label>Title</Label>
					<input
						name="title"
						type="text"
						placeholder="Product name*"
						style={{ width: '450px', padding: '10px' }}
						onChange={handleChange}
					/>
				</AddProductItem>
				<AddProductItem>
					<Label>Price</Label>
					<input
						name="price"
						type="number"
						placeholder="Product price*"
						style={{ width: '450px', padding: '10px' }}
						onChange={handleChange}
					/>
				</AddProductItem>
				<AddProductItem>
					<Label>Description</Label>
					<TextArea
						name="desc"
						type="text"
						placeholder="Product info*"
						onChange={handleChange}
					/>
				</AddProductItem>
				<AddProductItem>
					<Label>More Info</Label>
					<TextArea
						name="moreInfo"
						type="text"
						placeholder="More details. Not required."
						onChange={handleChange}
					/>
				</AddProductItem>
				<AddProductItem>
					<Select
						name="category"
						onChange={handleChange}
						defaultValue="Choose a Category*"
					>
						<Option disabled>Choose a Category*</Option>
						<Option value="furniture">Furniture</Option>
						<Option value="decor">Decor</Option>
						<Option value="clothes">Clothes</Option>
						<Option value="candles">Candles</Option>
						<Option value="art">Art</Option>
						<Option value="outdoors">Outdoors</Option>
					</Select>
				</AddProductItem>
				{error && (
					<div style={{ clear: 'both', width: '400px', padding: '10px 0px' }}>
						Something wrong happened. <br /> Please fill all necessary fields
						and try again.
					</div>
				)}
				<AddProductButton onClick={handleCreate}>Create</AddProductButton>
			</AddProductForm>
		</Container>
	)
}
