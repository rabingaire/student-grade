let FormFooter = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-5 col-xs-12">
            <label for="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Subject Name..."/>
          </div>
          <div className="col-md-5 col-xs-12">
            <label for="marks">Marks</label>
            <input type="text" className="form-control" id="marks" placeholder="Marks obt..."/>
          </div>
          <div className="col-md-2 col-xs-12">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-plus" aria-hidden="true"></i>  
            </button>
          </div>
        </div>
      </div>
    )
  }
});
