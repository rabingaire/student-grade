let Main = React.createClass({
  getInitialState() {
    return {
        schoolName: "School Name",
        studentName: "Student Name",
        studentRoll: "Student Roll",
        studentClass: "Student Class",
        studentSection: "Student Section"
    }
  },
  handleChange(data, name) {
    this.setState({ [name]: data });
  },

  render() {
    return (
      <div className="mainDiv">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="text-center brand-name">
                <h1>School Report</h1>
              </div>
              <div className="text-center">
                <FormHeader handleChange={this.handleChange} />
                <FormFooter />
              </div>
            </div>
            <div className="col-md-8 col-xs-12 text-center">
              <SheetHeader
                schoolName = {this.state.schoolName}
                studentName = {this.state.studentName}
                studentRoll = {this.state.studentRoll}
                studentClass = {this.state.studentClass}
                studentSection = {this.state.studentSection}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
});
