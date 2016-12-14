let SheetFooter = React.createClass({
  render() {
    return (
      <tr>
        <td>{this.props.subjectMarkInfo.subject}</td>
        <td>{this.props.subjectMarkInfo.mark}</td>
        <td>{this.props.subjectMarkInfo.grade}</td>
      </tr>
    )
  }
});
