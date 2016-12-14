let Main = React.createClass({
  getInitialState() {
    return {
        schoolName: "School Name",
        studentName: "Student Name",
        studentRoll: "Student Roll",
        studentClass: "Student Class",
        studentSection: "Student Section",
        subjectMarkInfos: []
    }
  },
  handleChange(data, name) {
    this.setState({ [name]: data });
  },

  addNewData(subjectMarkInfo) {
    let subjectMarkInfos = this.state.subjectMarkInfos.slice();
    subjectMarkInfos.push(subjectMarkInfo);
    this.setState({subjectMarkInfos: subjectMarkInfos})
  },

  render() {
    let subjectMarkInfos = this.state.subjectMarkInfos.map( (subjectMarkInfo) => {
      return (
        <SheetFooter key={subjectMarkInfo.subject + subjectMarkInfo.mark + subjectMarkInfo.grade} subjectMarkInfo={subjectMarkInfo} />
      )
    });

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
                <FormFooter handleAddData={this.addNewData} />
              </div>
            </div>
            <div className="col-md-8 col-xs-12">
              <SheetHeader
                schoolName = {this.state.schoolName}
                studentName = {this.state.studentName}
                studentRoll = {this.state.studentRoll}
                studentClass = {this.state.studentClass}
                studentSection = {this.state.studentSection}
              />
              <div className="sheetFooter">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Mark</th>
                      <th>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectMarkInfos}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
