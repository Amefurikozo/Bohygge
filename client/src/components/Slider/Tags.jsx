import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { sliderItems } from './sliderData'

const Tags = ({ imageTag, slideIndex }) => {
	const popover = (
		<Popover
			id="popover-basic"
			style={{
				backgroundColor: 'white',
				padding: '20px',
				borderRadius: '20px',
				width: '200px',
			}}
		>
			<Popover.Header as="h4" style={{ marginBottom: '10px' }}>
				{slideIndex === 0 && sliderItems[slideIndex].s1t1}
				{slideIndex === 1 && sliderItems[slideIndex].s2t1}
				{slideIndex === 2 && sliderItems[slideIndex].s3t1}
			</Popover.Header>
			<Popover.Body style={{ fontSize: '12px' }}>
				{slideIndex === 0 && sliderItems[slideIndex].s1b1}
				{slideIndex === 1 && sliderItems[slideIndex].s2b1}
				{slideIndex === 2 && sliderItems[slideIndex].s3b1}
				<div style={{ marginTop: '20px' }}>
					<b style={{ marginRight: '5px' }}>Price: </b>
					{slideIndex === 0 && sliderItems[slideIndex].s1p1}
					{slideIndex === 1 && sliderItems[slideIndex].s2p1}
					{slideIndex === 2 && sliderItems[slideIndex].s3p1}
					<span>€</span>
				</div>
			</Popover.Body>
		</Popover>
	)

	const popover2 = (
		<Popover
			id="popover-basic"
			style={{
				backgroundColor: 'white',
				padding: '20px',
				borderRadius: '20px',
				width: '200px',
			}}
		>
			<Popover.Header as="h4" style={{ marginBottom: '10px' }}>
				{slideIndex === 0 && sliderItems[slideIndex].s1t2}
				{slideIndex === 1 && sliderItems[slideIndex].s2t2}
				{slideIndex === 2 && sliderItems[slideIndex].s3t2}
			</Popover.Header>
			<Popover.Body style={{ fontSize: '12px' }}>
				{slideIndex === 0 && sliderItems[slideIndex].s1b2}
				{slideIndex === 1 && sliderItems[slideIndex].s2b2}
				{slideIndex === 2 && sliderItems[slideIndex].s3b2}
				<div style={{ marginTop: '20px' }}>
					<b style={{ marginRight: '5px' }}>Price: </b>
					{slideIndex === 0 && sliderItems[slideIndex].s1p2}
					{slideIndex === 1 && sliderItems[slideIndex].s2p2}
					{slideIndex === 2 && sliderItems[slideIndex].s3p2}
					<span>€</span>
				</div>
			</Popover.Body>
		</Popover>
	)

	const popover3 = (
		<Popover
			id="popover-basic"
			style={{
				backgroundColor: 'white',
				padding: '20px',
				borderRadius: '20px',
				width: '200px',
			}}
		>
			<Popover.Header as="h4" style={{ marginBottom: '10px' }}>
				{slideIndex === 0 && sliderItems[slideIndex].s1t3}
				{slideIndex === 1 && sliderItems[slideIndex].s2t3}
				{slideIndex === 2 && sliderItems[slideIndex].s3t3}
			</Popover.Header>
			<Popover.Body style={{ fontSize: '12px' }}>
				{slideIndex === 0 && sliderItems[slideIndex].s1b3}
				{slideIndex === 1 && sliderItems[slideIndex].s2b3}
				{slideIndex === 2 && sliderItems[slideIndex].s3b3}
				<div style={{ marginTop: '20px' }}>
					<b style={{ marginRight: '5px' }}>Price: </b>
					{slideIndex === 0 && sliderItems[slideIndex].s1p3}
					{slideIndex === 1 && sliderItems[slideIndex].s2p3}
					{slideIndex === 2 && sliderItems[slideIndex].s3p3}
					<span>€</span>
				</div>
			</Popover.Body>
		</Popover>
	)

	return (
		<>
			<OverlayTrigger overlay={popover} placement="top">
				<div className={`tagStyle ${imageTag + '-1'}`} dataHover="hi">
					+
				</div>
			</OverlayTrigger>
			<OverlayTrigger overlay={popover2} placement="top">
				<div className={`tagStyle ${imageTag + '-2'}`}>+</div>
			</OverlayTrigger>
			<OverlayTrigger overlay={popover3} placement="top">
				<div className={`tagStyle ${imageTag + '-3'}`}>+</div>
			</OverlayTrigger>
		</>
	)
}

export default Tags
