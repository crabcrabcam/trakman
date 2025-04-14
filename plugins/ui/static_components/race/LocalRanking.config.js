import cfg from '../../config/RaceUi.js'
import icons from '../../config/Icons.js'

export default {
  entries: 5,
  teamsEntries: 5,
  roundsEntries: 5,
  cupEntries: 5,
  lapsEntries: 5,
  stuntsEntries: 5,
  entryHeight: 2.15,
  width: cfg.width,
  title: "Local Records",
  icon: icons.chartLocal,
  margin: cfg.margin,
  topCount: 5,
  teamsTopCount: 3,
  roundsTopCount: 3,
  cupTopCount: 3,
  lapsTopCount: 3,
  stuntsTopCount: 5,
  displayNoRecordEntry: true,
  hidePanel: true,
  stuntsNoRecordEntry: '--'
}
