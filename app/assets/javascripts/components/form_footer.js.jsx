let FormFooter = React.createClass({
  handleClick() {
    let subject = this.refs.subject.value;
    let mark = this.refs.marks.value;
    let grade = this.calculateGrade(mark);
    let letter_grade = grade[0];
    let grade_point =  grade[1];
    this.props.handleAddData({  subject: subject, mark: mark, letter_grade: letter_grade, grade_point: grade_point });
  },

  calculateGrade(mark) {
    if(mark >= 90 && mark <= 100) {
      return (["A+",4])
    } else if (mark >= 80 && mark < 90) {
      return (["A",3.6])
    } else if (mark >= 70 && mark < 80) {
      return (["B+",3.2])
    } else if (mark >= 60 && mark < 70) {
      return (["B",2.8])
    } else if (mark >= 50 && mark < 60) {
      return (["C+",2.4])
    } else if (mark >= 40 && mark < 50) {
      return (["C",2.0])
    } else if (mark >= 20 && mark < 40) {
      return (["D",1.6])
    } else if (mark >= 1 && mark < 20) {
      return (["E",0.8])
    } else {
      return (["N",0.0])
    }
  },

  render() {
    return (
      <div className="form-footer">
        <div className="row">
          <div className="col-md-5 col-xs-12">
            <label htmlFor="subject">Subject</label>
            <input ref="subject" type="text" className="form-control" id="subject" placeholder="Subject Name..."/>
          </div>
          <div className="col-md-5 col-xs-12">
            <label htmlFor="marks">Marks</label>
            <input ref="marks" type="text" className="form-control" id="marks" placeholder="Marks obt..."/>
          </div>
          <div className="col-md-2 col-xs-12">
            <button type="submit" className="btn btn-primary" onClick={this.handleClick}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
});
