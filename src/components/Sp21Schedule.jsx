import React from 'react';
import Sp21GSchedule from "./Sp21GSchedule";
import Sp21GFairfaxInviteSchedule from "./Sp21GFairfaxInviteSchedule";
import Sp21OSchedule from "./Sp21OSchedule";
import Sp21OFairfaxInviteSchedule from "./Sp21OFairfaxInviteSchedule";
import ScheduleTBD from "./ScheduleTBD";
import '../App.css';

export default function Sp21Schedule() {
  return (
    <>
      <h1>Girls Schedule</h1>
      <hr className="table-hr"></hr>
      <Sp21GSchedule />
      <h2>Fairfax Invite</h2>
      <hr className="skinny-hr table-hr"></hr>
      <Sp21GFairfaxInviteSchedule />
      <h2>Virginia State Championship</h2>
      <hr className="skinny-hr table-hr"></hr>
      <ScheduleTBD date="05/22-05/23" location="Lake Fairfax Park"/>
      <h2>YULA Invite</h2>
      <hr className="skinny-hr table-hr"></hr>
      <ScheduleTBD date="05/29-05/30" location="Arlington, VA"/>

      <h1>Open Schedule</h1>
      <hr className="table-hr"></hr>
      <Sp21OSchedule />
      <h2>Fairfax Invite</h2>
      <hr className="skinny-hr table-hr"></hr>
      <Sp21OFairfaxInviteSchedule />
      <h2>Virginia State Championship</h2>
      <hr className="skinny-hr table-hr"></hr>
      <ScheduleTBD date="05/22-05/23" location="Lake Fairfax Park"/>
      <h2>YULA Invite</h2>
      <hr className="skinny-hr table-hr"></hr>
      <ScheduleTBD date="05/29-05/30" location="Arlington, VA"/>
    </>
  );
}