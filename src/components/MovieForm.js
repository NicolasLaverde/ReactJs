import React, {Component} from 'react';

class MovieForm extends Component {
	constructor(){
		super();
		this.state ={
			title: '',
			description: '',
			duration: '',
			repart: '',
			year:''
		}
		this.inputChange = this.inputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	inputChange(e) {
		const {value, name} = e.target;
		this.setState({
			[name] : value
		});
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.addNewMovie(this.state); 
		this.state ={
			title: '',
			description: '',
			duration: '',
			repart: '',
			year:''
		}
	}
	render(){
		return (
			<div className="card">
				<form className="card-body" onSubmit={this.handleSubmit} >
					<div className="form-group">
						<input type="text" name="title" value ={this.state.title} onChange={this.inputChange} placeholder="Título" className="form-control"/>
					</div>
					<div className="form-group">
						<textarea  value ={this.state.description} rows="12" name="description" onChange={this.inputChange} placeholder="Describa la Película" className="form-control"></textarea>
					</div>
					<div className="form-group">
						<input type="text" value ={this.state.duration}  name="duration" onChange={this.inputChange} placeholder="Duracion en minutos" className="form-control"/>
					</div>
					<div className="form-group">
						<input type="text" value ={this.state.repart} name="repart" onChange={this.inputChange} placeholder="Reparto" className="form-control"/>
					</div>
					<div className="form-group">
						<input type="text" name="year" value ={this.state.year} onChange={this.inputChange} placeholder="Año de estreno" className="form-control"/>
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
		)
	}
}

export default MovieForm; 