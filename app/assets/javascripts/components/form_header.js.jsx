let FormHeader = React.createClass({
  render() {
    return (
      <div>
        <form className="row">
          <div className="form-group col-xs-12">
            <label for="schoolname">School Name</label>
            <input type="text" className="form-control" id="schoolname" placeholder="Enter School Name..."/>
          </div>
          <div className="form-group col-md-6 col-xs-12">
            <label for="studentName">Name</label>
            <input type="text" className="form-control" id="studentName" placeholder="Enter Student Name..."/>
          </div>
          <div className="form-group col-md-3 col-xs-12">
            <label for="studentRoll">Roll</label>
            <input type="text" className="form-control" id="studentRoll" placeholder="Roll..."/>
          </div>
          <div className="form-group col-md-3 col-xs-12">
            <label for="studentClass">Class</label>
            <input type="text" className="form-control" id="studentClass" placeholder="Class..."/>
          </div>
        </form>
      </div>
    )
  }
});
