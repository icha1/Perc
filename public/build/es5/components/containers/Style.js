"use strict";

module.exports = {

	container: {
		background: "#fff",
		padding: 24,
		border: "1px solid #ddd",
		marginBottom: 36
	},
	input: {
		border: "none",
		borderBottom: "1px solid #eee",
		width: 100 + "%",
		marginBottom: 20
	},
	nav: {
		paddingTop: 16,
		paddingRight: 44,
		width: 100 + "%",
		height: 64,
		background: "rgba(0,0,0,0.85)",
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		zIndex: 2,
		display: "block"
	},
	menuItem: {
		float: "right",
		color: "#fff",
		marginLeft: 40,
		fontWeight: 400,
		marginTop: 4
	},
	select: {
		borderRadius: 0,
		background: "#fff",
		border: "none",
		borderBottom: "1px solid #eee",
		width: 100 + "%",
		marginBottom: 20
	},
	description: {
		width: 100 + "%",
		marginBottom: 20,
		background: "#f9f9f9",
		borderColor: "#ddd",
		height: 160,
		padding: 12
	},
	btnNext: {
		float: "right",
		marginBottom: 20
	},
	upload: {
		width: 100 + "%",
		marginBottom: 24,
		background: "#f9f9f9",
		border: "1px solid #ddd",
		color: "#777",
		minHeight: 180,
		padding: 16
	},
	icon: {
		width: 64,
		marginRight: 12,
		marginTop: 12
	},
	loader: {
		lines: 13,
		length: 20,
		width: 10,
		radius: 30,
		corners: 1,
		rotate: 0,
		direction: 1,
		color: "#fff",
		speed: 1,
		trail: 60,
		shadow: false,
		hwaccel: false,
		zIndex: 2000000000,
		top: "50%",
		left: "50%",
		scale: 1
	},
	textarea: {
		padding: 16,
		fontWeight: 200,
		background: "#f9f9f9",
		border: "none",
		minHeight: 60,
		width: 100 + "%"
	},
	modal: {
		background: "#f9f9f9",
		padding: 24,
		borderRadius: 3,
		image: {
			width: 96,
			borderRadius: 48,
			border: "1px solid #ddd",
			background: "#fff",
			marginBottom: 24
		},
		hr: {
			borderTop: "1px solid #ddd"
		},
		input: {
			marginRight: 8
		}
	}
};