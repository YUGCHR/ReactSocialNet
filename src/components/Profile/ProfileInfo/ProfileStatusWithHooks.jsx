import React, { useEffect, useState } from "react";
//import s from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  /*   let stateWithUSeState = useState(false);
  let editMode = stateWithUSeState[0];
  let setEditMode = stateWithUSeState[1]; */

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "NO STATUS"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEditMode} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
