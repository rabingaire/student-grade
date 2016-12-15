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
    if( this.checkDuplicateData(subjectMarkInfo) < 1 ) {
      let subjectMarkInfos = this.state.subjectMarkInfos.slice();
      subjectMarkInfos.push(subjectMarkInfo);
      this.setState({subjectMarkInfos: subjectMarkInfos});
    }
  },

  checkDuplicateData(subjectMarkInfo) {
    let count = 0;
    this.state.subjectMarkInfos.map( (data) => {
      if(data.subject === subjectMarkInfo.subject) {
        count ++
      }
    })
    return count;
  },

  handleClick() {
    $.ajax({
      url: '/students',
      type: 'POST',
      data: {
        student: {
          schoolname: this.state.schoolName,
          name: this.state.studentName,
          roll_no: this.state.studentRoll,
          student_class: this.state.studentClass,
          sub_class: this.state.studentSection
        }
      },
      context: this,
      success(data) {
        console.log("Yahoo!");
      }
    });
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
                      <th>Letter Grade</th>
                      <th>Grade Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjectMarkInfos}
                  </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.handleClick} disabled={this.state.subjectMarkInfos[0] == null}>Save to Database</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
