import React from "react";
import s from "./ProfileStatus.module.css";
import Preloader from "../../common/preloader/Preloader";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode() {
    //console.log("start of setState", this.state.editMode);
    this.setState({ editMode: true });
    //console.log("end of setState", this.state.editMode);
    //this.state.editMode = true;
    //this.forceUpdate();
  }

  deActivateEditMode() {    
    this.setState({ editMode: false });    
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
