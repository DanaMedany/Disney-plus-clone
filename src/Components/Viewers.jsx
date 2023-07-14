import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
		<Container>
			<Wrap>
				<img src="/images/viewers-disney.png" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-starwars.png" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-pixar.png" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-national.png" />
			</Wrap>
			<Wrap>
				<img src="/images/viewers-marvel.png" />
			</Wrap>

		</Container>
	);
}

export default Viewers;

const Container = styled.div`
	margin-top: 30px;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	padding: 30px 0 25px;
	gap: 25px;
`
const Wrap = styled.div`
	cursor: pointer;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
	rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	border-radius: 10px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		transform: scale(1.05);
		border-color: rgba(255, 255, 255, 0.8);
	}

`