/**
 * @Author: Rodrigo Soares <rodrigo>
 * @Date:   2017-11-27T16:56:23-08:00
 * @Project: Rename It
 * @Last modified time: 2017-12-02T15:28:23-08:00
 */
import React from "react"
import { Route, Switch } from "react-router-dom"
import RenameLayer from "./components/renameLayer"
import FindReplaceLayer from "./components/findReplaceLayer"
import Settings from "./components/settings"

export default () => (
  <Switch>
    <Route exact path="/find_replace" component={FindReplaceLayer} />
    <Route exact path="/rename" component={RenameLayer} />
    <Route exact path="/settings" component={Settings} />
  </Switch>
)
