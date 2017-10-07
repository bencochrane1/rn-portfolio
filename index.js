class NameInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: {
				type: undefined,
				body: undefined
			}

		}

		this.buttonClicked = this.buttonClicked.bind(this);
	}

	buttonClicked(event) {
	console.log('here?')
		let name = this.refs.nameInput.value;
		this.setState({
			message: {
				type: name ? "success" : "error",
				body: name ? "yay name!" : "this is not quite right"
			}
		})
	}

	render() {
		let msg = this.state.message;

		return (
			<div>
				<label>Name: </label>
				<input ref="nameInput" type="text" id="name"/>
				<button id="inputButton" onClick={this.buttonClicked}>Click Me</button>
				<MessageBox type={msg.type} message={msg.body}/>
			</div>
		)
	}	
}

class MessageBox extends React.Component {
	render() {
	return (
		<div className={"messageBox " + (this.props.type || "hidden") }>{this.props.message}</div>
	)
	}
}

ReactDOM.render(<NameInput/>, document.getElementById('content'))