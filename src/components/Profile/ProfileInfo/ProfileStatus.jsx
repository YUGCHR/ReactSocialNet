import React from "react";
//import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  //statusInputRef = React.createRef();

  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    //console.log("start of setState", this.state.editMode);
    this.setState({ editMode: true });
    //console.log("end of setState", this.state.editMode);
    //this.state.editMode = true;
    //this.forceUpdate();
  };

  deActivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate (prevProps, prevState) {
    // debugger;
    if(prevProps.status !== this.props.status)
    {
      this.setState({status: this.props.status
      });
    }
    console.log("componentDidUpdate")
  };

  render() {
    console.log("render")
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "NO STATUS"}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
// this.activateEditMode.bind(this)
// ref={this.statusInputRef}
