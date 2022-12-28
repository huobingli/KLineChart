/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import CustomPane from './CustomPane'
import CustomTechnicalIndicatorWidget from '../CustomWidget/CustomTechnicalIndicatorWidget'
import CustomYAxisWidget from '../CustomWidget/CustomYAxisWidget'
import CustomYAxis from '../CustomComponent/axis/CustomYAxis'
import CustomYCustomAxis from '../CustomComponent/axis/CustomYCustomAxis'

import { isValid } from '../utils/typeChecks'

export default class CustomTechnicalIndicatorPane extends CustomPane {
  constructor (props) {
    super(props)
    this._minHeight = 30
    this._initHeight(props)
    // this._yAxisList = []
  }

  _initBefore (props) {
    this._id = props.id
    this._yAxis = this._createYAxis(props)
    this._yCustomAxis = this._createYCustomAxis(props)
    this._yAxisList.push(this._yAxis)
  }

  _initHeight (props) {
    const height = props.height
    const minHeight = props.minHeight
    if (isValid(minHeight)) {
      this.setMinHeight(minHeight)
    }
    if (isValid(height)) {
      const mh = this.minHeight()
      const h = height < mh ? mh : height
      this.setHeight(h)
    }
  }

  _createYAxis (props) {
    return new CustomYAxis(
      props.chartStore,
      false,
      props.id
    )
  }

  _createYCustomAxis (props) {
    return new CustomYCustomAxis(
      props.chartStore,
      false,
      props.id
    )
  }

  _createMainWidget (container, props) {
    return new CustomTechnicalIndicatorWidget({
      container,
      chartStore: props.chartStore,
      xAxis: props.xAxis,
      yAxis: this._yAxis,
      yCustomAxis: this._yCustomAxis,
      paneId: props.id
    })
  }

  _createYAxisWidget (container, props) {
    return new CustomYAxisWidget({
      container,
      chartStore: props.chartStore,
      yAxis: this._yAxis,
      paneId: props.id
    })
  }

  _createYCustomAxisWidget (container, props) {
    return new CustomYAxisWidget({
      container,
      chartStore: props.chartStore,
      yAxis: this._yCustomAxis,
      paneId: props.id + "custom"
    })
  }

  /**
   * 获取最小高度
   * @returns
   */
  minHeight () {
    return this._minHeight
  }

  /**
   * 设置最小高度
   * @param minHeight
   */
  setMinHeight (minHeight) {
    this._minHeight = minHeight
  }

  setHeight (height) {
    super.setHeight(height)
    this._yAxis.setHeight(height)
  }

  setYAxisHeight (height) {
    this._yAxis.setHeight(height)
  }

  setYCustomAxisHeight (height) {
    this._yCustomAxis.setHeight(height)
  }

  setWidth (mainWidgetWidth, yAxisWidgetWidth) {
    super.setWidth(mainWidgetWidth, yAxisWidgetWidth)
    this._yAxis.setWidth(yAxisWidgetWidth)
    // this._yCustomAxis.setWidth(yAxisWidgetWidth)
  }

  setYAxisWidth (yAxisWidgetWidth) {
    this._yAxis.setWidth(yAxisWidgetWidth)
  }

  setYCustomAxisWidth (yAxisWidgetWidth) {
    super.setYCustomAxisWidth(yAxisWidgetWidth)
    this._yCustomAxis.setWidth(yAxisWidgetWidth)
  }

  /**
   * 获取id
   * @returns {string}
   */
  id () {
    return this._id
  }

  yAxis () {
    return this._yAxis
  }

  yCustomAxis () {
    return this._yCustomAxis
  }
}
