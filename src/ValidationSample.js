import React, { Component } from 'react';
import './ValidationSample.css'


class ValidationSample extends Component {
	state = {
		password: '',
		clicked: false,
		validated: false,
	}
	

	handleChange = (e) => { // e는 일반적으로 이벤트 객체를 가리키는 변수명으로 사용됨 
		this.setState({
			password: e.target.value
		})
	}

	handleButtonClick = () => {
		this.setState({
			clicked: true,
			validated: this.state.password === '0000' // 이게 만족하면 true가 되는건가/
		});
		this.input.focus();
	}

	render() {
		return (
			<div>
				<input 
					ref={(ref) => this.input=ref}
					type='password'
					value={this.state.password}
					onChange={this.handleChange}
					className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
				/>
				<button onClick={this.handleButtonClick}>검증하기</button>
			</div>
		)
	}
}

export default ValidationSample