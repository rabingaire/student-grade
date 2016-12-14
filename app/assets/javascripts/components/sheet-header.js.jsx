let SheetHeader = React.createClass({
  render() {
    return (
      <div className="sheetHeader text-center">
        <div className="row">
          <div className="col-xs-12">
            <h2>{this.props.schoolName}</h2>
          </div>
          <div className="col-xs-12">
            <h4><strong>Name:</strong> {this.props.studentName}</h4>
          </div>
          <div className="col-md-4 col-xs-12">
            <h4><strong>Roll No:</strong> {this.props.studentRoll}</h4>
          </div>
          <div className="col-md-4 col-xs-12">
            <h4><strong>Class:</strong> {this.props.studentClass}</h4>
          </div>
          <div className="col-md-4 col-xs-12">
            <h4><strong>Section:</strong> {this.props.studentSection}</h4>
          </div>
        </div>
      </div>
    )
  }
});
