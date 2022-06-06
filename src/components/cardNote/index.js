import React, {Component} from 'react';
import '../../App.css';

class CardNote extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="accordion-item">
                <h2 className="accordion-header" >
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-${this.props.data.id}`} aria-expanded="false" aria-controls={`panelsStayOpen-${this.props.data.id}`}>{this.props.data.title}</button>
                </h2>
                <div id={`panelsStayOpen-${this.props.data.id}`} className="collapse">
                    <div className="accordion-body">
                        {this.props.data.content}<br></br>
                        <button type="button" className="btn btn-danger btnDelete" onClick={()=>this.props.deleteNote(this.props.data.id)}>Apagar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardNote;