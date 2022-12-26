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

import Pane from './Pane'
import TechnicalIndicatorWidget from '../widget/TechnicalIndicatorWidget'
import YAxisWidget from '../widget/YAxisWidget'
import YAxis from '../component/axis/YAxis'

import { isValid } from '../utils/typeChecks'

export default class TechnicalIndicatorPane extends Pane {
  constructor(props) {
    super(props)
    this._minHeight = 30
    this._initHeight(props)
  }

  _initBefore(props) {
    this._id = props.id

    // 需要根据配置里
    this._yAxis = this._createYAxis(props)

    // add yaxis
    // this._yAxisArray = this.
  }

  _initHeight(props) {
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

  _createYAxis(props) {
    return new YAxis(
      props.chartStore,
      false,
      props.id
    )
  }

  // yaxis 数组
  _createMainWidget(container, props) {
    return new TechnicalIndicatorWidget({
      container,
      chartStore: props.chartStore,
      xAxis: props.xAxis,
      yAxis: this._yAxis,
      paneId: props.id
    })
  }

  // yaxis 数组
  _createYAxisWidgets(container, props) {
    const widgets = []
    this._yAxis.forEach(axis => {
      const widget = new YAxisWidget({
        container,
        chartStore: props.chartStore,
        yAxis: axis,
        paneId: props.id
      })

      widgets.push(widget)
    });

    return widgets
  }

  /**
   * 获取最小高度
   * @returns
   */
  minHeight() {
    return this._minHeight
  }

  /**
   * 设置最小高度
   * @param minHeight
   */
  setMinHeight(minHeight) {
    this._minHeight = minHeight
  }

  setHeight(height) {
    super.setHeight(height)
    this._yAxis.setHeight(height)
  }

  setMainWidgetWidth() {

  }

  // 这里的y宽度会存在差异，直接一起设置
  setWidth(mainWidgetWidth, yAxisWidgetWidth) {
    super.setWidth(mainWidgetWidth, yAxisWidgetWidth)

    this._yAxis.forEach(yAxis => {
      yAxis.setWidth(yAxisWidgetWidth)
    });
  }

  /**
   * 获取id
   * @returns {string}
   */
  id() {
    return this._id
  }

  yAxis() {
    return this._yAxis
  }
}
