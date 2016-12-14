let FormHeader = React.createClass({

  handleChange(event) {
    let name = event.target.name;
    let data = event.target.value;
    this.props.handleChange(data,name);
  },

  render() {
    return (
      <div className="form-heading">
        <form className="row">
          <div className="form-group col-xs-12">
            <label htmlFor="schoolName">School Name</label>
            <input name="schoolName" onChange={this.handleChange} type="text" className="form-control" id="schoolName" placeholder="Enter School Name..."/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="studentName">Name</label>
            <input name="studentName" onChange={this.handleChange} type="text" className="form-control" id="studentName" placeholder="Enter Student Name..."/>
          </div>
          <div className="form-group col-md-4 col-xs-12">
            <label htmlFor="studentRoll">Roll</label>
            <input name="studentRoll" onChange={this.handleChange} type="text" className="form-control" id="studentRoll" placeholder="Roll..."/>
          </div>
          <div className="form-group col-md-4 col-xs-12">
            <label htmlFor="studentClass">Class</label>
            <input name="studentClass" onChange={this.handleChange} type="text" className="form-control" id="studentClass" placeholder="Class..."/>
          </div>
          <div className="form-group col-md-4 col-xs-12">
            <label htmlFor="studentSection">Section</label>
            <input name="studentSection" onChange={this.handleChange} type="text" className="form-control" id="studentSection" placeholder="Section..."/>
          </div>
        </form>
      </div>
    )
  }
});
