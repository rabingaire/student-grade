let SheetHeader = React.createClass({
  render() {
    return (
      <div className="sheetHeader">
        <div className="row">
          <div className="col-xs-12">
            <h2>{this.props.schoolName}</h2>
          </div>
          <div className="col-xs-12">
            <h4>Name: {this.props.studentName}</h4>
          </div>
          <div className="col-md-4 col-xs-12">
            <h4>Roll No: {this.props.studentRoll}</h4>
          </div>
          <div className="col-md-4 col-xs-12">
            <h4>Class: {this.props.studentClass}</h4>
          </div>
          <div className="col-md-4 col-xs-12">
            <h4>Section: {this.props.studentSection}</h4>
          </div>
        </div>
      </div>
    )
  }
});
