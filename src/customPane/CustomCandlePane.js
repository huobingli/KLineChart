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

import CustomTechnicalIndicatorPane from './CustomTechnicalIndicatorPane'
import CustomCandleWidget from '../customWidget/CustomCandleWidget'
import CustomYAxis from '../customComponent/axis/CustomYAxis'

export default class CustomCandlePane extends CustomTechnicalIndicatorPane {
  _createYAxis (props) {
    return new CustomYAxis(props.chartStore, true, props.id)
  }

  _createMainWidget (container, props) {
    return new CustomCandleWidget({
      container,
      chartStore: props.chartStore,
      xAxis: props.xAxis,
      yAxis: this._yAxis,
      paneId: props.id
    })
  }
}
