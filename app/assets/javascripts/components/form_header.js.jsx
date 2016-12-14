let FormHeader = React.createClass({
  render() {
    return (
      <div className="form-heading">
        <form className="row">
          <div className="form-group col-xs-12">
            <label htmlFor="schoolname">School Name</label>
            <input type="text" className="form-control" id="schoolname" placeholder="Enter School Name..."/>
          </div>
          <div className="form-group col-xs-12">
            <label htmlFor="studentName">Name</label>
            <input type="text" className="form-control" id="studentName" placeholder="Enter Student Name..."/>
          </div>
          <div className="form-group col-md-4 col-xs-12">
            <label htmlFor="studentRoll">Roll</label>
            <input type="text" className="form-control" id="studentRoll" placeholder="Roll..."/>
          </div>
          <div className="form-group col-md-4 col-xs-12">
            <label htmlFor="studentClass">Class</label>
            <input type="text" className="form-control" id="studentClass" placeholder="Class..."/>
          </div>
          <div className="form-group col-md-4 col-xs-12">
            <label htmlFor="studentSection">Section</label>
            <input type="text" className="form-control" id="studentSection" placeholder="Section..."/>
          </div>
        </form>
      </div>
    )
  }
});
