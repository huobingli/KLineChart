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

import CustomWidget from './CustomWidget'
import CustomXAxisView from '../CustomView/CustomXAxisView'
import CustomXAxisOverlayView from '../CustomView/CustomXAxisOverlayView'

export default class CustomXAxisWidget extends CustomWidget {
  _createMainView (container, props) {
    return new CustomXAxisView(container, props.chartStore, props.xAxis)
  }

  _createOverlayView (container, props) {
    return new CustomXAxisOverlayView(container, props.chartStore, props.xAxis)
  }
}
