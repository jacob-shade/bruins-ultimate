import React, {useState} from 'react';
import '../../App.css';
import { InputLabel, Select, FormControl, MenuItem, FormHelperText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RosterNA from "../RosterNA";
import Sp21GRoster from '../Sp21GRoster';
import Sp21ORoster from '../Sp21ORoster';
import F21XRoster from '../F21XRoster';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}))

export default function Roster() {

  let roster;
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
        roster = <Sp21GRoster />
        break;
      case("2021-2022"):
        roster = <RosterNA />
        break;
    }
  }

  function getGirlsFallYear() {
    switch(allValues.year) {
      case("2020-2021"):
        roster = <RosterNA /> 
        break;
      case("2021-2022"):
        roster = <RosterNA />
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
        roster = <Sp21ORoster />
        break;
      case("2021-2022"):
        roster = <RosterNA />
        break;
    }
  }

  function getBoysFallYear() {
    switch(allValues.year) {
      case("2020-2021"):
        roster = <RosterNA />
        break;
      case("2021-2022"):
        roster = <RosterNA />
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
    roster = <RosterNA />
  }

  function getMixedFallYear() {
    switch(allValues.year) {
      case("2020-2021"):
        roster = <RosterNA />
        break;
      case("2021-2022"):
        roster = <F21XRoster />
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

  function getMSSpringYear() {
    switch(allValues.year) {
      case("2020-2021"):
        roster = <RosterNA />
        break;
      case("2021-2022"):
        roster = <RosterNA />
        break;
    }
  }

  function getMSFallYear() {
    switch(allValues.year) {
      case("2020-2021"):
        roster = <RosterNA />
        break;
      case("2021-2022"):
        roster = <RosterNA />
        break;
    }
  }

  function getMSSeason() {
    switch(allValues.season) {
      case("Spring"):
        getMSSpringYear();
        break;
      case("Fall"):
        getMSFallYear();
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
    case("MS"):
      getMSSeason()
      break;
  }

  return (
    <>
      {dropdowns}
      {roster}
    </>
  );
}