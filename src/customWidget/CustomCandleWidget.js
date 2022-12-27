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

import CustomCandleView from '../CustomView/CustomCandleView'
import CustomCandleOverlayView from '../CustomView/CustomCandleOverlayView'
import CustomTechnicalIndicatorWidget from './CustomTechnicalIndicatorWidget'

export default class CustomCandleWidget extends CustomTechnicalIndicatorWidget {
  _createMainView (container, props) {
    return new CustomCandleView(container, props.chartStore, props.xAxis, props.yAxis, props.paneId)
  }

  _createOverlayView (container, props) {
    return new CustomCandleOverlayView(container, props.chartStore, props.xAxis, props.yAxis, props.paneId)
  }
}