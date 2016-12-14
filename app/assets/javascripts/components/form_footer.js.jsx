let FormFooter = React.createClass({
  handleClick() {
    let subject = this.refs.subject.value;
    let mark = this.refs.marks.value;
    let grade = this.calculateGrade(mark);
    this.props.handleAddData({  subject: subject, mark: mark, grade: grade });
  },

  calculateGrade(mark) {
    if(mark >= 90 && mark <= 100) {
      return ("A+")
    } else if (mark >= 80 && mark < 90) {
      return ("A")
    } else if (mark >= 70 && mark < 80) {
      return ("B+")
    } else if (mark >= 60 && mark < 70) {
      return ("B")
    } else if (mark >= 50 && mark < 60) {
      return ("C+")
    } else if (mark >= 40 && mark < 50) {
      return ("C")
    } else if (mark >= 20 && mark < 40) {
      return ("D")
    } else if (mark >= 1 && mark < 20) {
      return ("E")
    } else {
      return ("N")
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
