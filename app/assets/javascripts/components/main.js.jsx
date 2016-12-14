let Main = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 col-xs-12"></div>
          <div className="col-md-4 col-xs-12">
            <div className="text-center">
              <h1>School Report</h1>
            </div>
            <div className="text-center">
              <FormHeader />
              <FormFooter />
            </div>
          </div>
          <div className="col-md-4 col-xs-12"></div>
        </div>
      </div>
    )
  }
});
