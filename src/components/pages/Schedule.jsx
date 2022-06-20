import React, {useState} from 'react';
import '../../App.css';
import './Schedule.css';
import { InputLabel, Select, FormControl, MenuItem, FormHelperText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScheduleTBD from '../ScheduleTBD';
import ScheduleNA from '../ScheduleNA';
import Sp21GSchedule from '../Sp21GSchedule';
import Sp21OSchedule from '../Sp21OSchedule';
import F21XSchedule from '../F21XSchedule';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}))

export default function Schedule() {

  let schedule;
  const classes = useStyles()

  const [allValues, setAllValues] = useState({
    team: 'Girls',
    season: 'Spring',
    year: '2020-2021',
  });

  const handleChange = e => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }

  const dropdowns = 
  <div className="center">
    <FormControl className={classes.formControl}>
      <InputLabel>Team</InputLabel>
      <Select 
        labelId="select-team"
        id="team"
        name="team"
        defaultValue={"Girls"}
        onChange={handleChange}
      >
      <MenuItem value={"Girls"}>Girls</MenuItem>
      <MenuItem value={"Boys"}>Boys</MenuItem>
      <MenuItem value={"Mixed"}>Mixed</MenuItem>
      </Select>
      <FormHelperText>Select Team</FormHelperText>
    </FormControl>
    <FormControl className={classes.formControl}>
      <InputLabel>Season</InputLabel>
      <Select 
        labelId="select-season"
        id="season"
        name="season"
        defaultValue={"Spring"}
        onChange={handleChange}
      >
      <MenuItem value={"Spring"}>Spring</MenuItem>
      <MenuItem value={"Fall"}>Fall</MenuItem>
      </Select>
      <FormHelperText>Select Season of the Year</FormHelperText>
    </FormControl>
    <FormControl className={classes.formControl}>
      <InputLabel>Year</InputLabel>
      <Select 
        labelId="select-year"
        id="year"
        name="year"
        defaultValue={"2020-2021"}
        onChange={handleChange}
      >
      <MenuItem value={"2021-2022"}>2021-2022</MenuItem>
      <MenuItem value={"2020-2021"}>2020-2021</MenuItem>
      </Select>
      <FormHelperText>Select School Year</FormHelperText>
    </FormControl>
  </div>

  function getGirlsSpringYear() {
    switch(allValues.year) {
      case("2020-2021"):
        schedule = <Sp21GSchedule />
        break;
      case("2021-2022"):
        schedule = <ScheduleTBD />
        break;
    }
  }

  function getGirlsFallYear() {
    switch(allValues.year) {
      case("2020-2021"):
        schedule = <ScheduleNA /> 
        break;
      case("2021-2022"):
        schedule = <ScheduleNA />
        break;
    }
  }

  function getGirlsSeason() {
    switch(allValues.season) {
      case("Spring"):
        getGirlsSpringYear();
        break;
      case("Fall"):
        getGirlsFallYear()
        break;
    }
  }

  function getBoysSpringYear() {
    switch(allValues.year) {
      case("2020-2021"):
        schedule = <Sp21OSchedule />
        break;
      case("2021-2022"):
        schedule = <ScheduleTBD />
        break;
    }
  }

  function getBoysFallYear() {
    switch(allValues.year) {
      case("2020-2021"):
        schedule = <ScheduleNA />
        break;
      case("2021-2022"):
        schedule = <ScheduleNA />
        break;
    }
  }

  function getBoysSeason() {
    switch(allValues.season) {
      case("Spring"):
        getBoysSpringYear();
        break;
      case("Fall"):
        getBoysFallYear();
        break;
    }
  }

  function getMixedSpringYear() {
    schedule = <ScheduleNA />
  }

  function getMixedFallYear() {
    switch(allValues.year) {
      case("2020-2021"):
        schedule = <ScheduleNA />
        break;
      case("2021-2022"):
        schedule = <F21XSchedule />
        break;
    }
  }

  function getMixedSeason() {
    switch(allValues.season) {
      case("Spring"):
        getMixedSpringYear();
        break;
      case("Fall"):
        getMixedFallYear();
        break;
    }
  }

  switch(allValues.team) {
    case("Girls"):
      getGirlsSeason()
      break;
    case("Boys"):
      getBoysSeason()
      break;
    case("Mixed"):
      getMixedSeason()
      break;
  }


  return (
    <>
      {dropdowns}
      {schedule}
    </>
  );
}